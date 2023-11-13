import { Typography } from "@mui/material";
import React from "react";

export default function DetailSmallTitle({ title }) {
  return (
    <Typography component="span" variant="h5" 
      mt={4} mb={2} fontWeight="bold">
      {title}
    </Typography>
  )
}