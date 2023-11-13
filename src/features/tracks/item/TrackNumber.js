import { PlayArrow } from "@mui/icons-material";
import { Grid, Tooltip } from "@mui/material";
import { useStateProvider } from "context";
import React from "react";

export default function TrackNumber({ id, number, name, preview_url, isHover, handlePlay }) {
  const [{ currentlyPlaying }] = useStateProvider();

  return (
    <Grid item pr={2} width={56} textAlign="end"
      color={ currentlyPlaying?.id === id ? "#1ed760" : "#5e5e5e" }>
      {
        isHover ?
        <Tooltip placement="top"
          title={ preview_url ? `Play ${name}` : "song is unavailable" }>
          <PlayArrow sx={{ color: "white" }} onClick={handlePlay}/>
        </Tooltip>
        : number
      }
    </Grid>
  );
}