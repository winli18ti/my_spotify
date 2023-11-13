import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { displayStyle, overflowStyle } from "utils";

export default function PlaylistItem({ playlist }) {
  const { id, image, name } = playlist;

  const location = useLocation();

  const getStyle = (path) => {
    return {
      bgcolor: location.pathname === path ? "#232323" : "transparent",
      "&:hover": {
        bgcolor: location.pathname === path ? "#393939" : "#1a1a1a"
      }
    }
  }

  return (
    <Grid container component={NavLink} to={`/playlist/${id}`}
      wrap="nowrap" p={1} borderRadius={2} alignItems="center"
      color="white" sx={{ ...getStyle(`/playlist/${id}`), textDecoration: "none" }}>
      <Grid item mr={2}>
        {
          image === '' ?
          <Box width={50} height={50} bgcolor="#282828" borderRadius={2}/>
          : <Box component="img" width={50} height={50}
              src={image} borderRadius={2}/>
        }
      </Grid>
      <Grid item xs={12} sx={displayStyle}>
        <Typography fontWeight="bold" variant="body2" sx={overflowStyle}>
          {name}
        </Typography>
      </Grid>
    </Grid>
  )
}