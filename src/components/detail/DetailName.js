import { Grid, Typography } from "@mui/material";
import React from "react";

export default function DetailName({ name }) {
  return (
    <Grid item>
      <Typography variant="h3" fontWeight="bold">
        {name}
      </Typography>
    </Grid>
  )
}