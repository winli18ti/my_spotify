import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import RecommendationItem from "./RecommendationItem";

export default function Recommendations({ tracks, handlePlay }) {
  return (
    <>
      <Box mt={4} mb={2}>
        <Typography variant="h5" fontWeight="bold">
          Recommended
        </Typography>
        <Typography variant="caption">
          Based on this song
        </Typography>
      </Box>
      <Grid container>
        {tracks?.map((track, index) => {
          return (
            <RecommendationItem key={track.id} number={index+1} track={track} 
              handlePlay={() => handlePlay(track, tracks, index)}/>
          );
        })}
      </Grid>
    </>
  );
}