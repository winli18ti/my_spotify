import { Box } from "@mui/material";
import { getAlbum, getArtistAlbums } from "api/services";
import { useStateProvider } from "context";
import { AlbumDetail } from "features/albums/detail";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { filterById, mapAlbum, mapAlbumsItems, useErrorHandler } from "utils";

export default function AlbumPage() {
  const [{ token }] = useStateProvider();
  const { id } = useParams();
  const [album, setAlbum] = useState({});
  const [otherAlbums, setOtherAlbums] = useState([]);
  const { handleError } = useErrorHandler();

  useEffect(() => {
    getAlbum(id)
      .then((albumData) => {
        const newAlbum = mapAlbum(albumData);
        setAlbum(newAlbum);
      })
      .catch((error) => {
        handleError();
      })
  }, [id, token]);

  useEffect(() => {
    if (Object.keys(album).length > 0) {
      const artistId = album.artists[0].id;
      getArtistAlbums(artistId)
        .then((albumsData) => {
          const newAlbums = filterById(mapAlbumsItems(albumsData.items));
          setOtherAlbums(newAlbums);
        })
    }
  }, [album]);

  return (
    <>
      {
        Object.keys(album).length > 0 ? 
        <AlbumDetail album={album} otherAlbums={otherAlbums}/> 
        : <Box height="100vh"/>
      }
    </>
  );
}