import { Grid } from "@mui/material";
import React, { useState } from "react";
import { hoverStyle } from "utils";

export default function TrackItem({ children }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <Grid container wrap="nowrap" pt={1} alignItems="center"
      borderRadius={1} sx={hoverStyle}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}>
      {children}
    </Grid>
  );
}