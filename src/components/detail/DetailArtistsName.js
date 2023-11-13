import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { linkStyle } from "utils";

export default function DetailArtistsName({ artists }) {
  return (
    <>
      {
        (artists?.length > 0 && artists[0].name === "Various Artists") ?
        <Typography component="span" fontWeight="bold">
          Various Artists
        </Typography>
        :
        artists?.map((artist, index) => {
          return (
            <React.Fragment key={artist.id}>
              <Typography component={Link} to={`/artist/${artist.id}`} 
                color="white" fontWeight="bold" sx={linkStyle}>
                {artist.name}
              </Typography>
              { index + 1 !== artists.length && ", " }
            </React.Fragment>
          )
        })
      }
    </>
  )
}