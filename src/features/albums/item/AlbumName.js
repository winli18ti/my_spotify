import { Tooltip, Typography } from "@mui/material";
import React from "react";

export default function AlbumName({ name }) {
  return (
    <Tooltip title={name} placement="top">
      <Typography variant="body1" color="white" 
        fontWeight="bold" noWrap={true}>
        {name}
      </Typography>
    </Tooltip>
  )
}