import { Circle } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { circleStyle, linkStyle } from "utils";
import TrackArtists from "./TrackArtists";
import Recommendations from "./Recommendations";
import { usePlayHandler } from "features/tracks/item";
import { DetailArtistsName, DetailImage, DetailName, 
  DetailPlay, DetailType, DetailYear } from "components/detail";

export default function TrackDetail({ track, artists, recommendations = [] }) {
  const { name, album, duration } = track;
  const { handlePlay } = usePlayHandler();

  return (
    <>
      <Grid container mt={5} wrap="nowrap">
        <DetailImage image={album.image}/>
        <Grid item xs={12} container direction="column-reverse">
          <Grid item>
            <DetailArtistsName artists={artists}/>
            <Circle sx={circleStyle}/>
            <Typography component={Link} to={`/album/${album.id}`} 
              color="white" sx={linkStyle}>
              {album.name}
            </Typography>
            <Circle sx={circleStyle}/>
            <DetailYear release_date={album.release_date} year={album.year}/>
            <Circle sx={circleStyle}/>
            {duration}
          </Grid>
          <DetailName name={name}/>
          <DetailType type="Song"/>
        </Grid>
      </Grid>
      <DetailPlay tracks={[track]} handlePlay={handlePlay}/>
      <TrackArtists artists={artists}/>
      {
        recommendations.length > 0 &&
        <Recommendations tracks={recommendations} handlePlay={handlePlay}/>
      }
    </>
  );
}