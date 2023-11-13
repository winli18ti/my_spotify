import { Grid } from "@mui/material";
import { TrackDuration, TrackImage, TrackName, TrackNumber } from "features/tracks/item";
import React from "react";
import { useState } from "react";
import { hoverStyle } from "utils";

export default function PopularTrackItem({ number, track, handlePlay }) {
  const [isHover, setIsHover] = useState(false);
  const { id, name, album, duration, preview_url } = track;

  return (
    <Grid container alignItems="center" wrap="nowrap" 
      pt={1} borderRadius={1} sx={hoverStyle}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}>

      <TrackNumber id={id} number={number} name={name}
        preview_url={preview_url} isHover={isHover}
        handlePlay={handlePlay}/>

      <Grid item container pl={1} alignItems="center" 
        color="#5e5e5e" wrap="nowrap">
        <TrackImage name={album.name} image={album.image}/>
        <TrackName id={id} name={name}/>
      </Grid>

      <TrackDuration duration={duration}/>
    </Grid>
  );
}