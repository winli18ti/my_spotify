import { Box, Button, Dialog, Stack, Typography } from "@mui/material";
import { PlaylistContext } from "App";
import { unfollowPlaylist } from "api/services";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { greenButtonStyle } from "utils";

const textStyle = {
  textTransform: "none",
  fontWeight: "bold",
  py: 1.5,
  px: 4,
  borderRadius: "50px",
  color: "black"
}

export default function DeletePlaylistDialog({ onClose, open, id, name }) {
  const navigate = useNavigate();
  const { setIsUpdated } = useContext(PlaylistContext);

  const handleDelete = () => {
    unfollowPlaylist(id)
      .then(() => {
        setIsUpdated((prevState) => prevState + 1);
        onClose();
        navigate("/");
      })
  }

  return (
    <Dialog onClose={onClose} open={open}>
      <Stack spacing={2} p={4} bgcolor="white" color="black">
        <Typography variant="h6" fontWeight="bold">
          Delete from Playlists?
        </Typography>
        <Box>
          <Typography component="span" variant="body2">
            This will delete&nbsp;
          </Typography>
          <Typography component="span" variant="body2" fontWeight="bold">
            {name}&nbsp;
          </Typography>
          <Typography component="span" variant="body2">
            from&nbsp;
          </Typography>
          <Typography component="span" variant="body2" fontWeight="bold">
            Your Playlists.
          </Typography>
        </Box>
        <Stack spacing={1} pt={2} direction="row" justifyContent="flex-end">
          <Button variant="text" sx={textStyle} onClick={onClose}>
            Cancel
          </Button>
          <Button variant="contained" bgcolor="#1ed760" 
            sx={greenButtonStyle} onClick={handleDelete}>
            Delete
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
}