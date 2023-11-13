import { Grid } from "@mui/material";
import React from "react";
import AlbumItem from "./AlbumItem";
import SkeletonAlbums from "./SkeletonAlbums";

export default function AlbumsList({ albums, lastRef, loading }) {
  return (
    <Grid container spacing={2}>
      {
        albums?.map((album, index) => {
          if (albums.length === index + 1) {
            return (
              <Grid item key={album.id} ref={lastRef} 
                xs={6} sm={4} md={3} lg={2.4} mb={2}>
                <AlbumItem album={album} />
              </Grid>
            );
          } else {
            return (
              <Grid item key={album.id} 
                xs={6} sm={4} md={3} lg={2.4}>
                <AlbumItem album={album} />
              </Grid>
            );
          }
        })
      }
      {
        loading && <SkeletonAlbums/>
      }
    </Grid>
  );
}