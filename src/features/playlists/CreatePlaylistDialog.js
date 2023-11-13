import { Clear } from "@mui/icons-material";
import { Box, Button, Dialog, IconButton, Stack, TextField, Typography } from "@mui/material";
import { createPlaylist } from "api/services";
import { useStateProvider } from "context";
import React from "react";
import { buttonStyle, useErrorHandler } from "utils";

export default function CreatePlaylistDialog({ state, setState, handleChange, 
  onClose, open, setIsUpdated, setOpenSnackbar }) {
  
  const [{ userInfo }] = useStateProvider();
  const { name, description } = state;

  const { handleError } = useErrorHandler();

  const handleAdd = (event) => {
    event.preventDefault();
    createPlaylist(userInfo.id, name, description)
      .then(() => {
        setState({
          name: "Your New Playlist",
          description: "",
        })
        setIsUpdated((prevState) => prevState + 1);
        setOpenSnackbar(true);
        onClose();
      })
      .catch((error) => {
        handleError("/");
      })
  }

  return (
    <Dialog onClose={onClose} open={open}>
      <Box component="form" onSubmit={handleAdd} p={3}>
        <Stack direction="row" alignItems="center" 
          justifyContent="space-between" mb={3}>
          <Typography variant="h6" fontWeight="bold">
            Create a new playlist
          </Typography>
          <IconButton onClick={onClose} size="small">
            <Clear/>
          </IconButton>
        </Stack>
        <Stack spacing={2} width={300} mb={1}>
          <TextField
            label="Name"
            name="name"
            value={name}
            onChange={handleChange}
            fullWidth
            required
            variant="filled"/>
          <TextField
              label="Description"
              name="description"
              value={description}
              onChange={handleChange}
              multiline={true}
              rows={3}
              fullWidth
              variant="filled"/>
        </Stack>
        <Stack direction="row" justifyContent="flex-end">
          <Button type="submit" variant="contained" sx={buttonStyle}>
            Create
          </Button>
        </Stack>
      </Box>
    </Dialog>
  );
}