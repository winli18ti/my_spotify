import { VolumeDown, VolumeMute, VolumeUp } from "@mui/icons-material";
import { Slider, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function Volume({ audioRef }) {
  const [volume, setVolume] = useState(0.5);
  useEffect(() => {
    audioRef.current.volume = volume;
  }, []);

  return (
    <Stack spacing={2} direction="row" display="flex" 
      alignItems="center" justifyContent="end">
      {
        volume >= 0.5 ? <VolumeUp/> :
        volume > 0 ? <VolumeDown/> :
        <VolumeMute/>
      }
      <Slider size="small"
        min={0}
        step={0.01}
        value={volume}
        max={1}
        onChange={ (_, value) => {
          audioRef.current.volume = value;
          setVolume(value);
        }}
        sx={{
          height: 4,
          width: 100,
          '& .MuiSlider-thumb': {
            width: 12,
            height: 12,
            boxShadow: 0,
          }
        }}
        />
    </Stack>
  );
}