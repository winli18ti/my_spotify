import { Box } from "@mui/material";
import { getArtist, getArtistAlbums, 
  getArtistRelatedArtists, getArtistTopTracks } from "api/services";
import { useStateProvider } from "context";
import { ArtistDetail } from "features/artists/detail";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { filterById, mapAlbumsItems, mapArtist, 
  mapArtistsItems, mapTracksItems, useErrorHandler } from "utils";

export default function ArtistPage() {
  const [{ token }] = useStateProvider();
  const { id } = useParams();
  const [artist, setArtist] = useState({});
  const [albums, setAlbums] = useState([]);
  const [tracks, setTracks] = useState([]);
  const [otherArtists, setOtherArtists] = useState([]);
  const { handleError } = useErrorHandler();

  useEffect(() => {
    Promise.all([getArtist(id), getArtistAlbums(id), 
      getArtistTopTracks(id), getArtistRelatedArtists(id)])
      .then(([artistData, albumsData, tracksData, artistsData]) => {
        const newArtist = mapArtist(artistData);
        setArtist(newArtist);

        const newAlbums = filterById(mapAlbumsItems(albumsData.items));
        setAlbums(newAlbums);

        const newTracks = filterById(mapTracksItems(tracksData.tracks));
        setTracks(newTracks);

        const newArtists = filterById(mapArtistsItems(artistsData.artists));
        setOtherArtists(newArtists);
      })
      .catch((error) => {
        handleError();
      })
  }, [id, token]);

  return (
    <>
      {
        (Object.keys(artist).length > 0) &&
        (albums.length > 0) &&
        (tracks.length > 0) &&
        (otherArtists.length > 0) ? 
        <ArtistDetail artist={artist} albums={albums} 
          tracks={tracks} otherArtists={otherArtists}/> : 
        <Box height="100vh"/>
      }
    </>
  );
}