import { Grid, Typography } from "@mui/material";
import React from "react";
import AlbumTracks from "./AlbumTracks";
import { Circle } from "@mui/icons-material";
import { circleStyle } from "utils";
import { useState } from "react";
import { useEffect } from "react";
import ArtistAlbums from "features/artists/detail/ArtistAlbums";
import { usePlayHandler } from "features/tracks/item";
import { DetailArtistsName, DetailImage, DetailName, 
  DetailPlay, DetailType, DetailYear } from "components/detail";

export default function AlbumDetail({ album, otherAlbums }) {
  const { name, image, release_date, year, artists, 
    total_tracks, copyrights, total_duration, album_type } = album;
  
  const LIMIT = 5;

  const [limitAlbums, setLimitAlbums] = useState(LIMIT);

  useEffect(() => {
    setLimitAlbums(LIMIT);
  }, [album]);

  const { handlePlay } = usePlayHandler();
  const tracks = album.tracks.map((track) => {
    return {
      ...track,
      album: {
        id: album.id,
        name: album.name,
        image: album.image,
      }
    }
  })

  const handleLimitAlbums = () => {
    limitAlbums === LIMIT ? 
    setLimitAlbums(otherAlbums.length) 
    : setLimitAlbums(LIMIT);
  }

  return (
    <>
      <Grid container mt={5} wrap="nowrap">
        <DetailImage image={image}/>
        <Grid item xs={12} container direction="column-reverse">
          <Grid item>
            <DetailArtistsName artists={artists}/>
            <Circle sx={circleStyle}/>
            <DetailYear release_date={release_date} year={year}/>
            <Circle sx={circleStyle}/>
            {`${total_tracks}, ${total_duration}`}
          </Grid>
          <DetailName name={name}/>
          <DetailType type={album_type}/>
        </Grid>
      </Grid>
      {
        tracks.length > 0 &&
        <>
        <DetailPlay tracks={tracks} handlePlay={handlePlay}/>
        <AlbumTracks tracks={tracks} handlePlay={handlePlay}/>
        </>
      }
      <Grid container direction="column" mt={4}>
        <Grid item>
          <Typography variant="body2" color="#5e5e5e">
            {release_date}
          </Typography>
        </Grid>
        {copyrights?.map((copyright, index) => {
          return (
            <Grid item key={index}>
              <Typography variant="body2" color="#5e5e5e">
                {copyright}
              </Typography>
            </Grid>
          );
        })}
      </Grid>
      {
        otherAlbums.length > 0 && 
        <ArtistAlbums title={`More by ${artists[0].name}`} 
          albums={otherAlbums} limit={limitAlbums}
          less={LIMIT} handleClick={handleLimitAlbums}/>
      }
    </>
  );
}