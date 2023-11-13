import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { linkStyle, overflowStyle } from "utils";

export default function CurrentTrack({ track }) {
  const { name, artists, album } = track;
  
  return (
    <Grid container item wrap="nowrap">
      <Grid item pr={2}>
        <Link to={`/album/${album.id}`}>
          <Box component="img" width={60} height={60} borderRadius={2} 
            alt={album.name} src={album.image}/>
        </Link>
      </Grid>
      <Grid item container direction="column">
        <Grid item xs mt={1}>
          <Typography component="span" sx={overflowStyle}>
            <Typography component={Link} to={`/album/${album.id}`} 
              color="white" sx={linkStyle}>
              {name}
            </Typography>
          </Typography>
        </Grid>
        <Grid item xs color="#5e5e5e" sx={overflowStyle} mb={1}>
          {artists?.map((artist, index) => {
            return (
              <React.Fragment key={artist.id}>
                <Typography variant="caption" component={Link} 
                  to={`/artist/${artist.id}`} color="#5e5e5e" sx={linkStyle}>
                  {artist.name}
                </Typography>
                {index + 1 !== artists.length && ", " }
              </React.Fragment>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}