import { Typography } from "@mui/material";
import React from "react";

export default function DetailSeeMoreLess({ length, less, limit, handleClick }) {
  return (
    <>
      {
        length > less &&
        <Typography component="span" variant="body2" fontWeight="bold" color="#5e5e5e"
          sx={{ cursor: "pointer", "&:hover": { color: "white" }}}
          onClick={handleClick}>
          { limit === less ? "See more" : "See less" }
        </Typography>
      }
    </>
  )
}