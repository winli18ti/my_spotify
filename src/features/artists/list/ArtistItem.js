import { Box, Stack, Tooltip, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { hoverStyle } from "utils";

export default function ArtistItem({ artist }) {
  const { id, name, image } = artist;
  return (
    <Link to={`/artist/${id}`} style={{ textDecoration: 'none' }}>
      <Box bgcolor="#181818" p={2} borderRadius={2} sx={hoverStyle}>
        {
          image ? 
          <Box component="img" borderRadius="50%" maxWidth="100%" 
            src={image} sx={{ aspectRatio: 1, objectFit: "cover" }}/> 
          :
          <Box borderRadius="50%" width="100%" 
            bgcolor="#333333" sx={{ aspectRatio: 1 }}/>
        }
        <Stack>
          <Tooltip title={name} placement="top">
            <Typography variant="body1" color="white" 
              fontWeight="bold" noWrap={true}>
              {name}
            </Typography>
          </Tooltip>
          <Typography variant="body2" color="#5e5e5e">
            Artist
          </Typography>
        </Stack>
      </Box>
    </Link>
  );
}