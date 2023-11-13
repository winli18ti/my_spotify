import { Clear } from "@mui/icons-material";
import { Grid, Tooltip } from "@mui/material";
import { TrackAlbumName, TrackArtistsName, TrackDateAdded, 
  TrackDuration, TrackImage, TrackName, TrackNumber } from "features/tracks/item";
import React, { useState } from "react";
import { hoverStyle } from "utils";

export default function PlaylistTrackItem({ number, track, handlePlay, handleDelete }) {
  const [isHover, setIsHover] = useState(false);
  const { id, name, album, artists, duration, preview_url, added_at } = track;

  return (
    <Grid container item wrap="nowrap" pt={1} alignItems="center"
      borderRadius={1} sx={hoverStyle}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}>

      <TrackNumber id={id} number={number} name={name}
        preview_url={preview_url} isHover={isHover}
        handlePlay={handlePlay}/>

      <Grid item pr={2} xs={10} md={5} alignItems="center" container wrap="nowrap">
        <TrackImage name={album.name} image={album.image}/>
        <Grid item xs={12} container direction="column">
          <TrackName id={id} name={name}/>
          <TrackArtistsName artists={artists} isHover={isHover}/>
        </Grid>
      </Grid>

      <TrackAlbumName album={album} isHover={isHover} xs={2.5}/>
      <TrackDateAdded added_at={added_at}/>
      <TrackDuration duration={duration} pr={0}/>

      <Grid item width={48} color="#5e5e5e" textAlign="center">
        {
          isHover && 
          <Tooltip title="Remove from this playlist" placement="top">
            <Clear sx={{ cursor: "pointer" }} onClick={() => handleDelete(id)}/>
          </Tooltip>
        }
      </Grid>
    </Grid>
  );
}