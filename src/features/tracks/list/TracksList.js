import { Box, Grid } from "@mui/material";
import React from "react";
import TrackItem from "./TrackItem";
import { AccessTime } from "@mui/icons-material";
import { displayStyle } from "utils";

export default function TracksList({ tracks, lastRef }) {
  return (
    <>
    <Grid container borderBottom={1} mt={1} mb={2} wrap="nowrap"
      bgcolor="#121212" position="sticky" top={112} zIndex={2}>
      
      <Grid item pr={2} width={56} color="#5e5e5e" textAlign="end">#</Grid>
      <Grid item xs={10} md={6} color="#5e5e5e">Title</Grid>
      <Grid component={Box} item xs={4} color="#5e5e5e" 
        sx={displayStyle}>Album</Grid>
      <Grid item width={64} color="#5e5e5e" textAlign="end"><AccessTime/></Grid>
    </Grid>
    {
      tracks?.map((track, index) => {
        if (tracks.length === index + 1) {
          return (
            <Grid container key={track.id} ref={lastRef}>
              <TrackItem number={index + 1} track={track}/>
            </Grid>
          );
        } else {
          return (
            <Grid container key={track.id}>
              <TrackItem number={index + 1} track={track}/>
            </Grid>
          );
        }
      })
    }
    </>
  );
}