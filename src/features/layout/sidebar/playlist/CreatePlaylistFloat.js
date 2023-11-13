import { Button, Stack, Typography } from "@mui/material";
import { redirectUserAuthorization } from "api/auth";
import React from "react";
import { smallButtonStyle } from "utils";

export default function CreatePlaylistFloat({ openLogin, setOpenLogin }) {
  return (
    <Stack spacing={1} borderRadius={2} bgcolor="#2e77d0" position="absolute" 
      left={{ xs: 96, md: 328}} top={{ xs: 120, md: 200 }} 
      zIndex={3} p={2} width={300}
      sx={{ opacity: openLogin ? "1" : "0",
        visibility: openLogin ? "visible" : "hidden",
        transition: "all .2s" }}>
      
      <Typography fontWeight="bold">
        Create a playlist
      </Typography>
      <Typography>
        Log in to create playlists.
      </Typography>
      <Stack spacing={1} direction="row" justifyContent="flex-end">
        <Button variant="text" sx={smallButtonStyle} 
          onClick={ () => setOpenLogin(false) }>
          Not now
        </Button>
        <Button variant="contained" sx={smallButtonStyle} 
          onClick={redirectUserAuthorization}>
          Log in
        </Button>
      </Stack>
    </Stack>
  );
}