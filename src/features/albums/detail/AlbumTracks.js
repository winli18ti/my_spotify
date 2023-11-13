import { AccessTime } from "@mui/icons-material";
import { Box, Grid } from "@mui/material";
import React from "react";
import AlbumTrackItem from "./AlbumTrackItem";

export default function AlbumTracks({ tracks, handlePlay }) {

  return (
    <Box>
      <Grid container borderBottom={1} borderColor="#5e5e5e" mt={4} mb={2} 
        wrap="nowrap" bgcolor="#121212" position="sticky" top={64}>
        <Grid item pr={2} width={56} color="#5e5e5e" textAlign="end">#</Grid>
        <Grid item pl={1} flex={1} color="#5e5e5e">Title</Grid>
        <Grid item pr={4} width={64} color="#5e5e5e" textAlign="end"><AccessTime/></Grid>
      </Grid>
      {tracks?.map((track, index) => {
        return (
          <AlbumTrackItem index={index} key={track.id} track={track} 
            handlePlay={() => handlePlay(track, tracks, index)}/>
        );
      })}
    </Box>
  );
}