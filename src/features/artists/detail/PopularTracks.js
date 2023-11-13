import React from "react";
import PopularTrackItem from "./PopularTrackItem";
import { Typography } from "@mui/material";
import { DetailSeeMoreLess } from "components/detail";

export default function PopularTracks({ title, tracks, limit, handlePlay, less, handleClick }) {
  return (
    <>
      <Typography variant="h5" mt={4} mb={2} fontWeight="bold">
        {title}
      </Typography>
      {tracks?.slice(0, limit).map((track, index) => {
        return (
          <PopularTrackItem key={track.id} number={index+1} track={track} 
            handlePlay={() => handlePlay(track, tracks, index)}/>
        );
      })}
      <DetailSeeMoreLess length={tracks.length} less={less} limit={limit}
        handleClick={handleClick}/>
    </>
  );
}