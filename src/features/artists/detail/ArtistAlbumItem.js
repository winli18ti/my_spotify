import { Circle } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import { AlbumImage, AlbumName } from "features/albums/item";
import React from "react";
import { Link } from "react-router-dom";
import { circleStyle, hoverStyle } from "utils";

export default function ArtistAlbumItem({ album }) {
  const { id, name, image, year, album_type } = album;
  return (
    <Link to={`/album/${id}`} style={{ textDecoration: 'none' }}>
      <Box bgcolor="#181818" p={2} borderRadius={2} sx={hoverStyle}>
        <AlbumImage image={image}/>
        <Stack mt={1}>
          <AlbumName name={name}/>
          <Typography variant="body2" color="#5e5e5e" height={50}>
            {year}<Circle sx={circleStyle}/>{album_type}
          </Typography>
        </Stack>
      </Box>
    </Link>
  );
}