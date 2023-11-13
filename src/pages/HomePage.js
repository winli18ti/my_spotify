import { Typography } from "@mui/material";
import { getNewReleases } from "api/services";
import { useStateProvider } from "context";
import { NewReleases } from "features/albums/list";
import { Error } from "features/response";
import React, { useState } from "react";
import { useEffect } from "react";
import { filterById, mapAlbumsItems, useErrorHandler } from "utils";

export default function HomePage() {
  const [{ token, userToken }] = useStateProvider();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [albums, setAlbums] = useState([]);
  const { handleError } = useErrorHandler();

  useEffect(() => {
    setLoading(true);
    setError(false);

    if (token || userToken) {
      getNewReleases()
        .then((albumsData) => {
          const newAlbums = filterById(mapAlbumsItems(albumsData.items));
          setAlbums(newAlbums);
          setLoading(false);
        })
        .catch((error) => {
          handleError();
        })
    }
  }, [token, userToken]);

  return (
    <>
      <Typography variant="h5" mt={4} mb={2} fontWeight="bold">
        New Releases
      </Typography>
      <NewReleases albums={albums} loading={loading}/>
      {
        error && <Error/>
      }
    </>
  );
}