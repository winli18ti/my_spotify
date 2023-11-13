import { Grid, Stack } from "@mui/material";
import React from "react";
import ArtistItem from "../list/ArtistItem";
import { DetailSeeMoreLess, DetailSmallTitle } from "components/detail";

export default function RelatedArtists({ title, artists, limit, less, handleClick }) {
  return (
    <>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <DetailSmallTitle title={title}/>
        <DetailSeeMoreLess length={artists.length} less={less} 
          limit={limit} handleClick={handleClick}/>
      </Stack>
      <Grid container spacing={2}>
        {
          artists?.slice(0, limit).map((artist) => {
            return (
              <Grid item key={artist.id} xs={6} sm={4} md={3} lg={2.4}>
                <ArtistItem artist={artist}/>
              </Grid>
            );
          })
        }
      </Grid>
    </>
  );
}