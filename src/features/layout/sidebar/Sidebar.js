import React from "react";
import SideNav from "./SideNav";
import { Stack } from "@mui/material";
import { PlaylistNav } from "./playlist";

export default function Sidebar() {
  return (
    <Stack width={{ xs: 90, md: 320 }}>
      <SideNav/>
      <PlaylistNav/>
    </Stack>
  );
}