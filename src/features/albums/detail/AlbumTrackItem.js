import { Grid } from "@mui/material";
import { TrackArtistsName, TrackDuration, 
  TrackName, TrackNumber } from "features/tracks/item";
import React from "react";
import { useState } from "react";
import { hoverStyle } from "utils";

export default function AlbumTrackItem({ track, handlePlay }) {
  const [isHover, setIsHover] = useState(false);
  const { id, name, artists, duration, track_number, preview_url } = track;

  return (
    <Grid container alignItems="center" mt={1}
      borderRadius={1} sx={hoverStyle}
      onMouseEnter={() => setIsHover(true)} 
      onMouseLeave={() => setIsHover(false)}>

      <TrackNumber id={id} number={track_number} name={name}
        preview_url={preview_url} isHover={isHover}
        handlePlay={handlePlay}/>

      <Grid item pl={1} xs color="#5e5e5e" container direction="column">
        <TrackName id={id} name={name}/>
        <TrackArtistsName artists={artists} isHover={isHover}/>
      </Grid>

      <TrackDuration duration={duration}/>
    </Grid>
  );
}