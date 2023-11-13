import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { linkStyle } from "utils";

export default function Footer() {
  return (
    <Box py={10} bgcolor="#121212" borderRadius="0px 0px 8px 8px" textAlign="center">
      <Typography component={Link} 
        to="https://developer.spotify.com/documentation/web-api" 
        target="_blank" color="#5e5e5e" sx={linkStyle}>
        https://developer.spotify.com/documentation/web-api
      </Typography>
    </Box>
  );
}