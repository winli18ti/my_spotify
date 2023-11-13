import { Grid } from "@mui/material";
import React from "react";
import ArtistItem from "./ArtistItem";
import SkeletonArtists from "./SkeletonArtists";

export default function ArtistsList({ artists, lastRef, loading }) {
  return (
    <Grid container spacing={2}>
      {
        artists?.map((artist, index) => {
          if (artists.length === index + 1) {
            return (
              <Grid item key={artist.id} ref={lastRef} 
                xs={6} sm={4} md={3} lg={2.4}>
                <ArtistItem artist={artist}/>
              </Grid>
            );
          } else {
            return (
              <Grid item key={artist.id} 
                xs={6} sm={4} md={3} lg={2.4}>
                <ArtistItem artist={artist}/>
              </Grid>
            );
          }
        })
      }
      {
        loading && <SkeletonArtists/>
      }
    </Grid>
  );
}