import { Box } from "@mui/material";
import React from "react";

export default function AlbumImage({ image }) {
  return (
    <>
      {
        image ? 
        <Box component="img" maxWidth="100%" borderRadius={2} 
          src={image} sx={{ aspectRatio: 1, objectFit: "cover" }}/>
        :
        <Box width="100%" borderRadius={2} bgcolor="#333333" 
          sx={{ aspectRatio: 1 }}/>
      }
    </>
  )
}