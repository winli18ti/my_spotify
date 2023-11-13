import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { displayStyle, smallButtonStyle } from "utils";

export default function CreatePlaylistBox({ handleClick }) {
  return (
    <Box bgcolor="#242424" borderRadius={2} px={2} py={2.5} 
      sx={displayStyle}>
      <Typography fontWeight="bold" gutterBottom>
        Create your first playlist
      </Typography>
      <Typography mb={2}>
        It's easy, we'll help you
      </Typography>
      <Button variant="contained" sx={smallButtonStyle} 
        onClick={handleClick}>
        Create playlist
      </Button>
    </Box>
  )
}