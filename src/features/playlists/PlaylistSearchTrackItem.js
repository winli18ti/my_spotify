import { Button, Grid } from "@mui/material";
import { TrackAlbumName, TrackArtistsName, TrackImage, 
  TrackName, TrackNumber, usePlayHandler } from "features/tracks/item";
import React, { useState } from "react";
import { hoverStyle, smallButtonStyle } from "utils";

export default function PlaylistSearchTrackItem({ number, track, handleAdd, playlist }) {
  const [isHover, setIsHover] = useState(false);
  const { id, name, album, artists, preview_url } = track;

  const { handlePlay } = usePlayHandler();

  return (
    <Grid container wrap="nowrap" pt={1} alignItems="center"
      borderRadius={1} sx={hoverStyle}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}>

      <TrackNumber id={id} number={number} name={name}
        preview_url={preview_url} isHover={isHover}
        handlePlay={() => handlePlay(track)}/>

      <Grid item pr={2} xs={10} md={6} alignItems="center" container wrap="nowrap">
        <TrackImage name={album.name} image={album.image}/>
        <Grid item xs={12} container direction="column">
          <TrackName id={id} name={name}/>
          <TrackArtistsName artists={artists} isHover={isHover}/>
        </Grid>
      </Grid>

      <TrackAlbumName album={album} isHover={isHover}/>

      <Grid item width={64}>
        {
          (preview_url && !(playlist.tracks.some((track) => track.id === id))) && 
          <Button variant="outlined" sx={smallButtonStyle} 
            onClick={() => handleAdd(id)}>
            Add
          </Button>
        }
      </Grid>
    </Grid>
  );
}