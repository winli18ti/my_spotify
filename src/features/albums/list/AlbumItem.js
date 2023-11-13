import { Circle } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { circleStyle, hoverStyle, linkStyle, overflowStyle2 } from "utils";
import { AlbumImage, AlbumName } from "features/albums/item";

export default function AlbumItem({ album }) {
  const { id, name, artists, image, year } = album;
  return (
    <Box bgcolor="#181818" p={2} borderRadius={2} sx={hoverStyle} position="relative">
      <Link to={`/album/${id}`} style={{ position: "absolute", 
        left: 0, top: 0, bottom: 0, right: 0 }}/>
      <AlbumImage image={image}/>
      <Stack mt={1}>
        <AlbumName name={name}/>
        <Typography variant="body2" color="#5e5e5e" height={50} sx={overflowStyle2}>
          {year}
          <Circle sx={circleStyle}/>
          {
          (artists?.length > 0 && artists[0].name === "Various Artists") ?
          <Typography variant="body2" component="span">
            Various Artists
          </Typography> 
          :
          artists?.map((artist, index) => {
            return (
              <React.Fragment key={artist.id}>
                <Typography variant="body2" component={Link} to={`/artist/${artist.id}`} 
                  color="#5e5e5e" sx={{...linkStyle, position: "relative", zIndex: 1}}>
                  {artist.name}
                </Typography>
                {index + 1 !== artists.length && ", " }
              </React.Fragment>
            );
          })}
        </Typography>
      </Stack>
    </Box>
  );
}