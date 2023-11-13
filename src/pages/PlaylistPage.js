import { Box } from "@mui/material";
import { PlaylistContext } from "App";
import { getPlaylist } from "api/services";
import { useStateProvider } from "context";
import { PlaylistDetail } from "features/playlists";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { mapPlaylist, useErrorHandler } from "utils";

export default function PlaylistPage() {
  const [{ userToken }] = useStateProvider();
  const { id } = useParams();
  const [playlist, setPlaylist] = useState({});
  const { isUpdated } = useContext(PlaylistContext);
  const { handleError } = useErrorHandler();

  useEffect(() => {
    getPlaylist(id)
      .then((playlistData) => {
        const newPlaylist = mapPlaylist(playlistData);
        setPlaylist(newPlaylist);
      })
      .catch((error) => {
        handleError("/");
      })
  }, [id, isUpdated]);

  return (
    <>
    {
      (userToken !== null && Object.keys(playlist).length > 0) ? 
      <PlaylistDetail playlist={playlist}/>
      : <Box height="100vh"/>
    }
    </>
  );
}