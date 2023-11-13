import { AccessTime } from "@mui/icons-material";
import { Box, Grid } from "@mui/material";
import React from "react";
import PlaylistTrackItem from "./PlaylistTrackItem";
import { displayStyle } from "utils";

export default function PlaylistTracks({ tracks, handlePlay, handleDelete }) {
  return (
    <Box>
      <Grid container borderBottom={1} pt={2.5} mb={2} wrap="nowrap"
        bgcolor="#121212" position="sticky" top={64} zIndex={2}>
        
        <Grid item pr={2} width={56} color="#5e5e5e" textAlign="end">#</Grid>
        <Grid item xs={10} md={5} color="#5e5e5e">Title</Grid>
        <Grid component={Box} item xs={2.5} color="#5e5e5e" 
          sx={displayStyle}>Album</Grid>
        <Grid component={Box} item xs={2.5} color="#5e5e5e" 
          sx={displayStyle}>Date added</Grid>
        <Grid item width={64} color="#5e5e5e" textAlign="end"><AccessTime/></Grid>
        <Grid item width={48}/>
      </Grid>
      {
        tracks?.map((track, index) => {
          return (
            <Grid container key={track.id}>
              <PlaylistTrackItem number={index + 1} track={track} 
                handlePlay={() => handlePlay(track, tracks, index)} 
                handleDelete={handleDelete}/>
            </Grid>
          );
        })
      }
    </Box>
  );
}