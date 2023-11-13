import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { hoverStyle, linkStyle } from "utils";

export default function TrackArtistItem({ artist }) {
  const { id, name, image } = artist;
  return (
    <Grid container component={Link} to={`/artist/${id}`} 
      p={1} borderRadius={1} 
      sx={{...hoverStyle, color: "white", textDecoration: "none" }}>
      <Grid item pr={2}>
        {
          image ? 
          <Box component="img" borderRadius="50%" 
            width={80} height={80} src={image}/> 
          :
          <Box borderRadius="50%" bgcolor="#333333"
            width={80} height={80}/>
        }
      </Grid>
      <Grid item container direction="column" flex={1}>
        <Grid item xs mt={1}>
          <Typography variant="caption" fontWeight="bold">
            Artist
          </Typography>
        </Grid>
        <Grid item xs mb={1} sx={linkStyle}>
          <Typography>
            {name}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}