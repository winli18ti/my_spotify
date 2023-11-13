import { Home, Search } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { displayStyle } from "utils";

export default function SideNavItem({ path, text }) {
  const location = useLocation();

  const getColor = (path) => {
    return location.pathname === path ? "white" : "#5e5e5e";
  }

  const getStyle = (path) => {
    return {
      color: getColor(path),
      fontSize: "40px"
    }
  }

  const getIcon = (path) => {
    switch(path) {
      case "/":
        return <Home sx={getStyle(path)}/>
      case "/search":
        return <Search sx={getStyle(path)}/>
      default:
        return
    }
  }

  return (
    <Box display="flex" component={NavLink} to={path} width="100%"
      height={40} py={0.5} px={1.5} alignItems="center"
      sx={{ textDecoration: "none" }}>
      { getIcon(path) }
      <Typography fontWeight="bold" color={getColor(path)} ml={2}
        sx={displayStyle}>
        {text}
      </Typography>
    </Box>
  )
}