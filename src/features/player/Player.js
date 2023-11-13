import { Box, Grid } from "@mui/material";
import React, { useRef } from "react";
import CurrentTrack from "./CurrentTrack";
import PlayerControl from "./PlayerControl";
import { reducerCases, useStateProvider } from "context";
import Volume from "./Volume";

export default function Player() {
  const [{ selectedList, currentlyPlaying }, dispatch] = useStateProvider();
  const audioRef = useRef({
    duration: 0,
  });

  const prevTrack = () => {
    const { index } = currentlyPlaying;
    if (index - 1 < 0)  return;
    const { id, name, album, artists, preview_url } = selectedList[index-1];
    const prevPlaying = {
      index: index - 1,
      id, name, album, artists, preview_url,
    }
    dispatch({ type: reducerCases.PLAYING, currentlyPlaying: prevPlaying });
    dispatch({ type: reducerCases.CURRENT_TIME, currentTime: 0 });
  }

  const nextTrack = () => {
    const { index } = currentlyPlaying;
    if (index + 1 >= selectedList.length) {
      return;
    }
    const { id, name, album, artists, preview_url } = selectedList[index + 1];
    const nextPlaying = {
      index: index + 1,
      id, name, album, artists, preview_url,
    }
    dispatch({ type: reducerCases.PLAYING, currentlyPlaying: nextPlaying });
    dispatch({ type: reducerCases.CURRENT_TIME, currentTime: 0 });
  }

  const onPlaying = () => {
    const duration = audioRef.current.duration;
    const currentTime = audioRef.current.currentTime;
    dispatch({ type: reducerCases.CURRENT_TIME, currentTime });

    if (currentTime >= duration) {
      const { index } = currentlyPlaying;
      if (index + 1 >= selectedList.length) {
        dispatch({ type: reducerCases.PLAYER_STATE, playerState: false });
      }
      nextTrack();
    }
  }

  return (
    <>
    {
      currentlyPlaying && 
      <Box bgcolor="black" px={2} py={1} width="100%" height="80px"
        sx={{ position: "fixed", bottom: 0 }}>
        <audio src={currentlyPlaying.preview_url} 
          ref={audioRef} onTimeUpdate={onPlaying}/>
        
        <Grid container alignItems="center">
          <Grid item flex={1}>
            <CurrentTrack track={currentlyPlaying}/>
          </Grid>
          <Grid item flex={1}>
            <PlayerControl audioRef={audioRef} 
              prevTrack={prevTrack} nextTrack={nextTrack}/>
          </Grid>
          <Grid item flex={1}>
            <Volume audioRef={audioRef}/>
          </Grid>
        </Grid>
      </Box>
    }
    </>
  );
}