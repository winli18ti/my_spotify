import { Grid } from "@mui/material";
import React from "react";
import AlbumItem from "./AlbumItem";
import SkeletonAlbums from "./SkeletonAlbums";

export default function NewReleases({ albums, loading }) {
  return (
    <Grid container spacing={2}>
      {
        albums?.map((album) => {
          return (
            <Grid item key={album.id} xs={6} sm={4} md={3} lg={2.4}>
              <AlbumItem album={album} />
            </Grid>
          );
        })
      }
      {
        loading && <SkeletonAlbums/>
      }
    </Grid>
  );
}