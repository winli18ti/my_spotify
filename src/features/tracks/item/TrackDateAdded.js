import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { displayStyle, overflowStyle } from "utils";

export default function TrackDateAdded({ added_at }) {
  return (
    <Grid component={Box} item pr={2} xs={2.5} color="#5e5e5e"
      sx={displayStyle}>
      <Typography sx={overflowStyle}>
        {added_at}
      </Typography>
    </Grid>
  );
}