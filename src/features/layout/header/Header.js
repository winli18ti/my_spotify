import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import TopNav from "./TopNav";
import { Grid, IconButton, Tooltip } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { reducerCases, useStateProvider } from "context";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);
  const [{ search }, dispatch] = useStateProvider();

  const onChange = ({ target }) => {
    dispatch({ type: reducerCases.SEARCH, search: target.value });
  }

  useEffect(() => {
    if (location.pathname === "/") {
      dispatch({ type: reducerCases.SEARCH, search: "" });
      dispatch({ type: reducerCases.SEARCH_TYPE, searchType: "artists" });
    }
    setShowSearch(location.pathname === "/search");
  }, [location]);

  return (
    <Grid container bgcolor="#121212" borderRadius="8px 8px 0px 0px" 
      justifyContent="space-between" pl={2} pr={3} py={1}
      height={64} position="sticky" top={0} zIndex={2}>
      
      <Grid item xs={8} md={6} lg={5} display="flex" alignItems="center">
        <Tooltip title="Go back">
          <IconButton sx={{ mr: 0.5 }} 
            onClick={ () => navigate(-1) } size="small">
            <ArrowBack/>
          </IconButton>
        </Tooltip>
        <Tooltip title="Go forward">
          <IconButton sx={{ mr: 1 }} 
            onClick={ () => navigate(1) } size="small">
            <ArrowForward/>
          </IconButton>
        </Tooltip>
        {showSearch && <SearchBar value={search} onChange={onChange}/>}
      </Grid>
      
      <Grid item textAlign="end">
        <TopNav/>
      </Grid>
    </Grid>
  );
}