import { Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { linkStyle, overflowStyle } from "utils";

export default function TrackArtistsName({ artists, isHover }) {
  return (
    <Grid item xs={12} color={ isHover ? "white" : "#5e5e5e" } sx={overflowStyle}>
      {
        artists?.map((artist, index) => (
          <React.Fragment key={artist.id}>
            <Typography component={Link} to={`/artist/${artist.id}`}
              color={ isHover ? "white" : "#5e5e5e" } sx={linkStyle}>
                {artist.name}
              </Typography>
              { index + 1 !== artists.length && ", " }
          </React.Fragment>
        ))
      }
    </Grid>
  );
}