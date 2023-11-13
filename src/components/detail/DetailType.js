import { Grid, Typography } from "@mui/material";
import React from "react";

export default function DetailType({ type }) {
  return (
    <Grid item>
      <Typography variant="subtitle2" fontWeight="bold">
        {type}
      </Typography>
    </Grid>
  )
}