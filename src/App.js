import React, { createContext, useState } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";

import { Root } from "features/layout";
import { StateProvider, initialState } from "context";
import { AlbumPage, ArtistPage, HomePage, 
  PlaylistPage, SearchPage, TrackPage } from "pages";
import reducer from "context/reducer";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={ <Root/> }>
        <Route path="" element={ <HomePage/> }/>
        <Route path="search" element={ <SearchPage/> }/>
        <Route path="album/:id" element={ <AlbumPage/> }/>
        <Route path="artist/:id" element={ <ArtistPage/> }/>
        <Route path="track/:id" element={ <TrackPage/> }/>
        <Route path="playlist/:id" element={ <PlaylistPage/> }/>
      </Route>
    </Route>
  )
);

export const PlaylistContext = createContext();

export default function App() {
  const [isUpdated, setIsUpdated] = useState(0); //check if playlist is updated

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <PlaylistContext.Provider value={{ isUpdated, setIsUpdated }}>
        <RouterProvider router={router}/>
      </PlaylistContext.Provider>
    </StateProvider>
  );
}