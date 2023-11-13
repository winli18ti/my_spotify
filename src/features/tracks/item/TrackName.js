import { Grid, Typography } from "@mui/material";
import { useStateProvider } from "context";
import React from "react";
import { Link } from "react-router-dom";
import { overflowStyle, titleLinkStyle } from "utils";

export default function TrackName({ id, name }) {
  const [{ currentlyPlaying }] = useStateProvider();
  return (
    <Grid item xs={12}>
      <Typography component="span" sx={overflowStyle}>
        <Typography component={Link} to={`/track/${id}`}
          color={ currentlyPlaying?.id === id ? "#1ed760" : "white" }
          sx={titleLinkStyle}>
            {name}
          </Typography>
      </Typography>
    </Grid>
  );
}