import { Add, LibraryMusic } from "@mui/icons-material";
import { Box, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import { PlaylistContext } from "App";
import { getCurrentUserPlaylists } from "api/services";
import { useStateProvider } from "context";
import { CreatePlaylistDialog, PlaylistSnackbar } from "features/playlists";
import React, { useContext, useEffect, useRef, useState } from "react";
import { displayStyle, mapPlaylists, scrollbarStyle, useErrorHandler } from "utils";
import PlaylistItem from "./PlaylistItem";
import CreatePlaylistFloat from "./CreatePlaylistFloat";
import CreatePlaylistBox from "./CreatePlaylistBox";

export default function PlaylistNav() {
  const [{ userToken }] = useStateProvider();
  const [playlists, setPlaylists] = useState([]);
  const { isUpdated, setIsUpdated } = useContext(PlaylistContext);

  const [openDialog, setOpenDialog] = useState(false);
  const [dialogState, setDialogState] = useState({
    name: "Your New Playlist",
    description: "",
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  const navRef = useRef();

  const { handleError } = useErrorHandler();

  const handleAddButton = () => {
    userToken === null ? setOpenLogin(true) : setOpenDialog(true);
  }

  const handleChangeDialog = (event) => {
    setDialogState((prevState) => ({ ...prevState,
      [event.target.name]: event.target.value
    }));
  }

  useEffect(() => {
    if (userToken) {
      getCurrentUserPlaylists()
        .then((playlistsData) => {
          const newPlaylists = mapPlaylists(playlistsData.items);
          setPlaylists(newPlaylists);
        })
        .catch((error) => {
          handleError();
        })
    } else {
      setPlaylists([]);
    }
  }, [userToken, isUpdated]);

  return (
    <>
      <Box bgcolor="#121212" borderRadius="8px 8px 0px 0px" 
        px={1.5} pt={1} pb={3} mt={2}>
        
        <Stack direction="row" width="100%" height={40} py={0.5} px={1.5} 
          alignItems="center" justifyContent="space-between">
          
          <Stack direction="row" alignItems="center" 
            sx={{ color: "#5e5e5e", cursor: "default" }}>
            <LibraryMusic sx={{ fontSize: '40px', ...displayStyle }}/>
            <Typography fontWeight="bold" ml={2} 
              sx={displayStyle}>
              Your Playlists
            </Typography>
          </Stack>
          
          <Tooltip title="Create a new playlist" placement="top">
            <IconButton size="small" onClick={handleAddButton}>
              <Add sx={{ color: "#5e5e5e", "&:hover": { color: "white" }, fontSize: "30px" }}/>
            </IconButton>
          </Tooltip>
        </Stack>
      </Box>

      <Box bgcolor="#121212" borderRadius="0px 0px 8px 8px" 
        px={1.5} py={1} height='100%'
        overflow="auto" ref={navRef}
        sx={scrollbarStyle}>
        {
          playlists?.length > 0 ?
          playlists.map((playlist) => {
            return (
              <PlaylistItem key={playlist.id} playlist={playlist}/>
            );
          })
          :
          <>
            <CreatePlaylistBox handleClick={handleAddButton}/>
            {
              userToken === null &&
              <CreatePlaylistFloat openLogin={openLogin} setOpenLogin={setOpenLogin}/>
            }
          </>
        }
        <CreatePlaylistDialog state={dialogState} setState={setDialogState} 
          handleChange={handleChangeDialog} onClose={() => setOpenDialog(false)} 
          open={openDialog} setIsUpdated={setIsUpdated} 
          setOpenSnackbar={setOpenSnackbar}/>
        
        <PlaylistSnackbar open={openSnackbar} onClose={() => setOpenSnackbar(false)}
          message="Saved to" boldMessage="Your Playlists"/>
      </Box>
    </>
    
  );
}