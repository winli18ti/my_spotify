import { Search } from "@mui/icons-material";
import { Box, InputBase } from "@mui/material";
import React from "react";

export default function SearchBar({ value, onChange }) {
  return (
    <Box bgcolor="#242424" width="100%" alignItems="center" 
      border={1} borderColor="#242424" borderRadius={12.5}
      sx={{ display: "flex", "&:hover": { 
        bgcolor: "#2a2a2a", border: "1px solid white" } }}>
        <Search sx={{ mx: 1 }} />
        <InputBase value={value} onChange={onChange} 
          placeholder="What do you want to listen to?" fullWidth 
          sx={{ py: 0.5 }}/>
    </Box>
  );
}