import { Box } from "@mui/material";
import React from "react";
import SideNavItem from "./SideNavItem";

export default function SideNav() {
  return (
    <Box bgcolor="#121212" borderRadius={2} px={1.5} py={1}>
      <SideNavItem path="/" text="Home"/>
      <SideNavItem path="/search" text="Search"/>
    </Box>
  );
}