import { Tooltip, Typography } from "@mui/material";
import React from "react";

export default function DetailYear({ release_date, year }) {
  return (
    <Tooltip title={release_date} placement="top">
      <Typography component="span">
        {year}
      </Typography>
    </Tooltip>
  );
}