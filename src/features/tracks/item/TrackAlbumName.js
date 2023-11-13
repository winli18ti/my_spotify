import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { linkStyle, overflowStyle } from "utils";

export default function TrackAlbumName({ album, isHover, xs = 4 }) {
  return (
    <Grid component={Box} item pr={2} xs={xs} display={{ xs: "none", md: "block" }}>
      <Typography component={Link} to={`/album/${album.id}`}
        color={ isHover ? "white" : "#5e5e5e" }
        sx={{ ...linkStyle, ...overflowStyle }}>
        {album.name}
      </Typography>
    </Grid>
  );
}