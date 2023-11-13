import { Grid } from "@mui/material";
import React, { useState } from "react";
import { hoverStyle } from "utils";
import { TrackAlbumName, TrackArtistsName, TrackDuration, 
  TrackImage, TrackName, TrackNumber, usePlayHandler } from "features/tracks/item";

export default function TrackItem({ number, track }) {
  const [isHover, setIsHover] = useState(false);
  const { id, name, album, artists, duration, preview_url } = track;

  const { handlePlay } = usePlayHandler();

  return (
    <Grid container item wrap="nowrap" pt={1} alignItems="center"
      borderRadius={1} sx={hoverStyle}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}>

      <TrackNumber id={id} number={number} name={name} 
        preview_url={preview_url} isHover={isHover}
        handlePlay={() => handlePlay(track) }/>

      <Grid item pr={2} xs={10} md={6} alignItems="center" container wrap="nowrap">
        <TrackImage name={album.name} image={album.image}/>
        <Grid item xs container direction="column">
          <TrackName id={id} name={name}/>
          <TrackArtistsName artists={artists} isHover={isHover}/>
        </Grid>
      </Grid>

      <TrackAlbumName album={album} isHover={isHover}/>
      <TrackDuration duration={duration} pr={0}/>
    </Grid>
  );
}