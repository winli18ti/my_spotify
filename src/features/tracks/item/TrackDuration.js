import { Grid } from "@mui/material";
import React from "react";

export default function TrackDuration({ duration, pr = 4 }) {
  return (
    <Grid item pr={pr} width={64} color="#5e5e5e" textAlign="end">
      {duration}
    </Grid>
  );
}