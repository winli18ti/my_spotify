import { Grid } from "@mui/material";
import React from "react";
import { useState } from "react";
import { hoverStyle } from "utils";
import { TrackArtistsName, TrackDuration, 
  TrackImage, TrackName, TrackNumber } from "features/tracks/item";

export default function RecommendationItem({ number, track, handlePlay }) {
  const [isHover, setIsHover] = useState(false);
  const { id, name, album, artists, duration, preview_url } = track;

  return (
    <Grid container item alignItems="center" wrap="nowrap" pt={1} 
      borderRadius={1} sx={hoverStyle}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}>

      <TrackNumber id={id} number={number} name={name}
        preview_url={preview_url} isHover={isHover}
        handlePlay={handlePlay}/>

      <Grid item container pl={1} flex={1} alignItems="center" 
        color="#5e5e5e" wrap="nowrap">
        <TrackImage name={album.name} image={album.image}/>
        <Grid item xs container direction="column">
          <TrackName id={id} name={name}/>
          <TrackArtistsName artists={artists} isHover={isHover}/>
        </Grid>
      </Grid>

      <TrackDuration duration={duration}/>
    </Grid>
  );
}