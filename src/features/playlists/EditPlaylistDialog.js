import { Clear } from "@mui/icons-material";
import { Box, Button, Dialog, IconButton, Stack, TextField, Typography } from "@mui/material";
import { PlaylistContext } from "App";
import { addCoverImage, changePlaylistDetails } from "api/services";
import React, { useContext, useState } from "react";
import { buttonStyle, useErrorHandler } from "utils";

export default function EditPlaylistDialog({ state, handleChange, handleUpload, 
  onClose, open, setOpenSnackbar }) {
  
  const { id, name, description, image, imageURL } = state;
  const [isHover, setIsHover] = useState(false);
  const { setIsUpdated } = useContext(PlaylistContext);

  const { handleError } = useErrorHandler();

  const handleUpdate = (event) => {
    event.preventDefault();
    changePlaylistDetails(id, name, description)
      .then(() => {
        onClose();
        setIsUpdated((prevState) => prevState + 1);
        setOpenSnackbar(true);
      })
      .catch((error) => {
        handleError("/");
      })
    
    if (image !== imageURL) {
      addCoverImage(id, image)
        .then(() => {
          onClose();
          setIsUpdated((prevState) => prevState + 1);
          setOpenSnackbar(true);
        })
        .catch((error) => {
          handleError("/");
        })
    }
  }

  return (
    <Dialog onClose={onClose} open={open}>
      <Box component="form" onSubmit={handleUpdate} p={3}>
        <Stack direction="row" alignItems="center" 
          justifyContent="space-between" mb={3}>
          <Typography variant="h6" fontWeight="bold">
            Edit details
          </Typography>
          <IconButton onClick={onClose} size="small">
            <Clear/>
          </IconButton>
        </Stack>
        <Stack direction="row" mb={1}>
          <Stack mr={2}>
            <Box component="label" bgcolor="#282828" width={180} height={180} 
            sx={{ display: "flex", alignItems: "center", 
              justifyContent: "center", cursor: "pointer" }} 
              onMouseEnter={() => setIsHover(true)} 
              onMouseLeave={() => setIsHover(false)}>
              {
                isHover ? 
                <Typography component="span">
                  Choose photo
                  <input
                    styles={{ display: "none" }}
                    type="file"
                    hidden
                    accept="image/jpeg, image/jpg"
                    onChange={handleUpload}
                    name="image"/>
                </Typography> :
                imageURL && <img width={180} height={180} src={imageURL}/>
              }
            </Box>
          </Stack>
          <Stack spacing={2} width={300}>
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
        </Stack>
        <Stack direction="row" justifyContent="flex-end">
          <Button type="submit" variant="contained" sx={buttonStyle}>
            Save
          </Button>
        </Stack>
      </Box>
    </Dialog>
  );
}