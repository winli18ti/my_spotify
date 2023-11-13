import { PlayCircle } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import React from "react";

export default function DetailPlay({ tracks, handlePlay }) {
  return (
    <Tooltip placement="top"
      title={ tracks[0].preview_url ? 
      `Play ${tracks[0].name}` : "song is unavailable" }>
      <IconButton disableRipple={true}
        onClick={() => tracks[0].preview_url ? 
        handlePlay(tracks[0], tracks) : {}}>
        <PlayCircle sx={{ color: "#1ed750", fontSize: "4rem" }}/>
      </IconButton>
    </Tooltip>
  )
}