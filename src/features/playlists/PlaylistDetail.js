import { Grid, Stack, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import PlaylistTracks from "./PlaylistTracks";
import EditPlaylistDialog from "./EditPlaylistDialog";
import { removePlaylistItems } from "api/services";
import PlaylistSearchTracks from "./PlaylistSearchTracks";
import { PlaylistContext } from "App";
import Options from "./Options";
import { usePlayHandler } from "features/tracks/item";
import { DetailImage, DetailPlay, DetailType } from "components/detail";
import PlaylistSnackbar from "./PlaylistSnackbar";
import { useErrorHandler } from "utils";

export default function PlaylistDetail({ playlist }) {
  const { id, name, image, description, 
    tracks, total_tracks, total_duration } = playlist;
  const { setIsUpdated } = useContext(PlaylistContext);

  const [openDialog, setOpenDialog] = useState(false);
  const [dialogState, setDialogState] = useState({
    id: id,
    name: name,
    description: description,
    image: image,
  })

  const [openSnackbarDelete, setOpenSnackbarDelete] = useState(false);
  const [openSnackbarUpdate, setOpenSnackbarUpdate] = useState(false);

  useEffect(() => {
    setDialogState({
      id: playlist.id,
      name: playlist.name,
      description: playlist.description,
      image: playlist.image,
      imageURL: playlist.image,
    })
  }, [playlist]);

  const handleChangeDialog = (event) => {
    setDialogState((prevState) => ({ ...prevState,
      [event.target.name]: event.target.value
    }));
  }

  const { handlePlay } = usePlayHandler();
  const { handleError } = useErrorHandler();

  const handleDelete = (trackId) => {
    const tracks = [ { uri: `spotify:track:${trackId}` }];
    removePlaylistItems(id, tracks)
      .then(() => {
        setIsUpdated((prevState) => prevState + 1);
        setOpenSnackbarDelete(true);
      })
      .catch((error) => {
        handleError("/");
      })
  }

  const handleUpload = (event) => {
    const [file] = event.target.files;

    const reader = new FileReader();
    let base64String = "";
    reader.onload = function () {
      base64String = reader.result.replace("data:", "")
        .replace(/^.+,/, "");
        
      setDialogState((prevState) => ({ ...prevState,
        imageURL: URL.createObjectURL(file),
        image: base64String,
      }))
    }
    reader.readAsDataURL(file);
  }

  return (
    <>
      <Grid container mt={5} wrap="nowrap">
        <DetailImage image={image}/>
        <Grid item xs={12} container direction="column-reverse">
          {
            (total_tracks && total_duration) &&
            <Grid item>
              {`${total_tracks}, ${total_duration}`}
            </Grid>
          }
          {
            description &&
            <Grid item>
              <Typography variant="subtitle2" gutterBottom>
                {description}
              </Typography>
            </Grid>
          }
          <Grid item>
            <Typography variant="h3" fontWeight="bold" 
              sx={{ cursor: "pointer" }} 
              onClick={() => setOpenDialog(true)}>
              {name}
            </Typography>
          </Grid>
          <DetailType type="Playlist"/>
        </Grid>
      </Grid>
      <Stack direction="row" spacing={2}>
        {
          tracks.length > 0 &&
          <DetailPlay tracks={tracks} handlePlay={handlePlay}/>
        }
        <Options name={name} setOpenDialog={setOpenDialog} 
          playlistId={id} playlistName={name}/>
      </Stack>
      
      {
        tracks.length > 0 &&
        <PlaylistTracks tracks={tracks} 
          handlePlay={handlePlay} handleDelete={handleDelete}/>
      }
      <PlaylistSearchTracks playlist={playlist}/>
      
      <EditPlaylistDialog state={dialogState} 
        handleChange={handleChangeDialog} handleUpload={handleUpload} 
        onClose={() => setOpenDialog(false)} 
        open={openDialog} setOpenSnackbar={setOpenSnackbarUpdate}/>
      
      <PlaylistSnackbar open={openSnackbarDelete} 
        onClose={() => setOpenSnackbarDelete(false)}
        message="Delete from" boldMessage={name}/>
      
      <PlaylistSnackbar open={openSnackbarUpdate} 
        onClose={() => setOpenSnackbarUpdate(false)}
        message="Playlist updated"/>
    </>
  );
}