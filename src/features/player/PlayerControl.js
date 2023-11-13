import { PauseCircle, PlayCircle, SkipNext, SkipPrevious } from "@mui/icons-material";
import { Slider, Stack, Tooltip, Typography } from "@mui/material";
import { reducerCases, useStateProvider } from "context";
import React from "react";
import { useEffect } from "react";
import { msToTime } from "utils";

const isPlaying = (current) => {
  return current.currentTime > 0 &&
    !current.paused && !current.ended &&
    current.readyState > current.HAVE_CURRENT_DATA;
}

export default function PlayerControl({ audioRef, prevTrack, nextTrack }) {
  const buttonSize = { fontSize: "2.5rem" };

  const [{ currentlyPlaying, currentTime, selectedList, playerState }, 
    dispatch] = useStateProvider();

  useEffect(() => {
    const { current } = audioRef;
    
    if (!isPlaying(current) && playerState) {
      audioRef.current.play()
        .catch((error) => {
          console.log("Button clicked too fast");
        })
    } else if (!playerState) {
      audioRef.current.pause();
    }
  }, [currentlyPlaying, playerState]);

  useEffect(() => {
    if (currentTime === 0) {
      audioRef.current.currentTime = 0;
    }
  }, [currentTime]);

  const playPause = () => {
    dispatch({ type: reducerCases.PLAYER_STATE, playerState: !playerState });
  }

  return (
    <Stack>
      <Stack direction="row" justifyContent="center" spacing={1}>
        <Tooltip title="Previous" placement="top">
          <SkipPrevious 
            sx={{...buttonSize, 
              color: (currentlyPlaying.index === 0 ? "#5e5e5e" : "white") }} 
            onClick={() => prevTrack()}/>
        </Tooltip>
        {
          playerState ? 
          <PauseCircle sx={buttonSize} onClick={playPause}/>
          : 
          <Tooltip title="Play" placement="top">
            <PlayCircle sx={buttonSize} onClick={playPause}/>
          </Tooltip>          
        }
        <Tooltip title="Next" placement="top">
          <SkipNext 
            sx={{...buttonSize, 
            color: (currentlyPlaying.index + 1 === selectedList.length ? "#5e5e5e" : "white") }} 
            onClick={() => nextTrack()}/>
        </Tooltip>
      </Stack>
      <Stack direction="row" spacing={2} alignItems="center">
        <Typography variant="caption">
          {msToTime(currentTime * 1000)}
        </Typography>
        <Slider size="small"
          min={0}
          step={0.1}
          value={currentTime}
          max={Number(audioRef.current.duration) || 0}
          onChange={ (_, value) => {
            const { current } = audioRef;
            if (playerState && isPlaying(current)) {
              audioRef.current.pause();
            }
            dispatch({ type: reducerCases.CURRENT_TIME, currentTime: value});
          }}
          onChangeCommitted={(_, value) => {
            const { current } = audioRef;
            current.currentTime = value;
            if (playerState && !isPlaying(current)) {
              audioRef.current.play();
            }
          }}
          sx={{
            height: 4,
            '& .MuiSlider-thumb': {
              width: 12,
              height: 12,
              boxShadow: 0,
            }
          }}
          />
        <Typography variant="caption">
          { isNaN(audioRef.current.duration) ? "0:00" 
          : msToTime(audioRef.current.duration * 1000) }
        </Typography>
      </Stack>
    </Stack>
  );
}