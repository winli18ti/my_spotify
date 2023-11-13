import { Box, Button, Dialog, Grid, Typography } from "@mui/material";
import { redirectUserAuthorization } from "api/auth";
import { reducerCases, useStateProvider } from "context";
import React from "react";
import { buttonStyle } from "utils";

export default function LoginDialog() {
  const [{ currentlyPlaying, openDialog }, dispatch] = useStateProvider();
  
  const handleClose = () => {
    dispatch({ type: reducerCases.OPEN_DIALOG, openDialog: false });
    dispatch({ type: reducerCases.PLAYING, currentlyPlaying: null });
    dispatch({ type: reducerCases.SELECTED_LIST, selectedList: null });
    dispatch({ type: reducerCases.PLAYER_STATE, playerState: false});
  }

  return (
    <>
    {
      currentlyPlaying &&
      <Dialog onClose={handleClose} open={openDialog} fullWidth maxWidth="sm">
        <Grid container alignItems="center" justifyContent="space-evenly" my={6}>
          <Grid item textAlign="center">
            <Box component="img" width={280} height={280} 
              src={currentlyPlaying.album.image} alt={currentlyPlaying.name}/>
          </Grid>
          <Grid item xs={5} textAlign="center">
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Start listening with your spotify account
            </Typography>
            <Button onClick={redirectUserAuthorization} 
              variant="contained" sx={buttonStyle}>
              Log in
            </Button>
          </Grid>
        </Grid>
      </Dialog>
    }
    </>
  );
}