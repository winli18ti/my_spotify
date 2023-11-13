import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import PopularTracks from "./PopularTracks";
import ArtistAlbums from "./ArtistAlbums";
import RelatedArtists from "./RelatedArtists";
import { useState } from "react";
import { usePlayHandler } from "features/tracks/item";
import { DetailImage, DetailName, DetailPlay, DetailType } from "components/detail";

export default function ArtistDetail({ artist, albums, tracks, otherArtists }) {

  const LIMIT = 5;

  const [limitTracks, setLimitTracks] = useState(LIMIT);
  const [limitAlbums, setLimitAlbums] = useState(LIMIT);
  const [limitArtists, setLimitArtists] = useState(LIMIT);

  const { name, image } = artist;

  useEffect(() => {
    setLimitTracks(LIMIT);
    setLimitAlbums(LIMIT);
    setLimitArtists(LIMIT);
  }, [artist]);

  const { handlePlay } = usePlayHandler();

  const handleLimitTracks = () => {
    limitTracks === LIMIT ? 
    setLimitTracks(tracks.length) 
    : setLimitTracks(LIMIT);
  }

  const handleLimitAlbums = () => {
    limitAlbums === LIMIT ? 
    setLimitAlbums(albums.length) 
    : setLimitAlbums(LIMIT);
  }

  const handleLimitArtists = () => {
    limitArtists === LIMIT ? 
    setLimitArtists(otherArtists.length) 
    : setLimitArtists(LIMIT);
  }

  return (
    <>
      <Grid container mt={5} wrap="nowrap">
        <DetailImage image={image}/>
        <Grid item xs={12} container direction="column-reverse">
          <DetailName name={name}/>
          <DetailType type="Artist"/>
        </Grid>
      </Grid>
      {
        tracks.length > 0 &&
        <>
          <DetailPlay tracks={tracks} handlePlay={handlePlay}/>
          <PopularTracks title="Popular" tracks={tracks} limit={limitTracks} handlePlay={handlePlay}
            less={LIMIT} handleClick={handleLimitTracks}/>
        </>
      }
      {
        albums.length > 0 &&
        <ArtistAlbums title="Album" albums={albums} limit={limitAlbums} 
          less={LIMIT} handleClick={handleLimitAlbums}/>
      }
      {
        otherArtists.length > 0 &&
        <RelatedArtists title="Fans also like" artists={otherArtists} limit={limitArtists}
          less={LIMIT} handleClick={handleLimitArtists}/>
      }
    </>
  );
}