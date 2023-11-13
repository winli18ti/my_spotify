import { Clear, Search } from "@mui/icons-material";
import { Box, InputBase, Typography } from "@mui/material";
import { searchTracks } from "api/services";
import React, { useContext, useEffect, useState } from "react";
import { mapTracksItems, useErrorHandler } from "utils";
import PlaylistSearchTrackItem from "./PlaylistSearchTrackItem";
import { addTracksToPlaylist } from "api/services";
import { useLocation } from "react-router-dom";
import { PlaylistContext } from "App";
import PlaylistSnackbar from "./PlaylistSnackbar";

export default function PlaylistSearchTracks({ playlist }) {
  const location = useLocation();
  const [search, setSearch] = useState("");
  const [tracks, setTracks] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const { setIsUpdated } = useContext(PlaylistContext);
  const { handleError } = useErrorHandler();

  useEffect(() => {
    if (search) {
      searchTracks(search, 0, 10)
        .then((tracksData) => {
          const newTracks = mapTracksItems(tracksData.items);
          setTracks(newTracks);
        })
        .catch((error) => {
          handleError("/");
        })
    } else {
      setTracks([]);
    }
  }, [search]);

  useEffect(() => {
    setSearch("");
  }, [location]);

  const onChange = ({ target }) => {
    setSearch(target.value);
  }

  const handleClear = () => {
    setSearch("");
  }

  const handleAdd = (trackId) => {
    const uris = [`spotify:track:${trackId}`];
    addTracksToPlaylist(playlist.id, uris)
      .then(() => {
        setOpenSnackbar(true);
        setIsUpdated((prevState) => prevState + 1);
      })
      .catch((error) => {
        handleError("/");
      })
  }

  return (
    <Box borderTop="1px solid lightgray" mt={6}>
      <Typography variant="h6" fontWeight="bold" my={2}>
        Let's find song for your playlist
      </Typography>
      <Box bgcolor="#242424" width={360} alignItems="center" borderRadius={1}
        display="flex" mb={3}>
        <Search sx={{ mx: 1 }}/>
        <InputBase value={search} onChange={onChange} 
          placeholder="Search for songs" fullWidth sx={{ py: 0.5 }}/>
          {
            search && <Clear sx={{ mx: 1 }} onClick={handleClear}/>
          }
      </Box>
      {
        tracks.length > 0 ? 
        <>
        {
          tracks.map((track, index) => {
            return (
              <PlaylistSearchTrackItem key={track.id} number={index+1} 
                track={track} handleAdd={handleAdd} playlist={playlist}/>
            );
          })
        }
        </>
        : <Box height="30vh"/>
      }
      <PlaylistSnackbar open={openSnackbar} 
        onClose={() => setOpenSnackbar(false)}
        message="Added to" boldMessage={playlist.name}/>
    </Box>
  );
}