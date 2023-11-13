import { Box, Grid } from "@mui/material";
import React from "react";

export default function TrackImage({ name, image }) {
  return (
    <Grid item mr={2}>
      <Box component="img" height={40} width={40} src={image} alt={name}/>
    </Grid>
  );
}