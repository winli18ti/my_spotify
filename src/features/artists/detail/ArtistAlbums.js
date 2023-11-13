import React from "react";
import ArtistAlbumItem from "./ArtistAlbumItem";
import { Grid, Stack } from "@mui/material";
import { DetailSeeMoreLess, DetailSmallTitle } from "components/detail";

export default function ArtistAlbums({ title, albums, limit, less, handleClick }) {
  return (
    <>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <DetailSmallTitle title={title}/>
        <DetailSeeMoreLess length={albums.length} less={less} 
          limit={limit} handleClick={handleClick}/>
      </Stack>
      <Grid container spacing={2}>
        {albums?.slice(0, limit).map((album) => {
          return (
            <Grid item key={album.id} xs={6} sm={4} md={3} lg={2.4}>
              <ArtistAlbumItem album={album}/>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}