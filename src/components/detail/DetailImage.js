import { Box, Grid } from "@mui/material";
import React from "react";
import { largeImageStyle } from "utils";

export default function DetailImage({ image }) {
  return (
    <Grid item mr={2}>
      {
        image ? <Box component="img" sx={largeImageStyle} src={image}/>
        : <Box sx={largeImageStyle} bgcolor="#333333"/>
      }
    </Grid>
  )
}