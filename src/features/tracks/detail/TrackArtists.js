import { Box } from "@mui/material";
import React from "react";
import TrackArtistItem from "./TrackArtistItem";

export default function TrackArtists({ artists }) {
  return (
    <Box>
      {
        artists?.map((artist) => {
          return (
            <React.Fragment key={artist.id}>
              <TrackArtistItem artist={artist}/>
            </React.Fragment>
          );
        })
      }
    </Box>
  );
}