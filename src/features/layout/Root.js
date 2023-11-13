import React, { useEffect } from "react";
import { Header } from "./header";
import { Outlet, useLocation, useSearchParams } from "react-router-dom";
import { Sidebar } from "./sidebar";
import { Box, Stack } from "@mui/material";
import { REDIRECT_URI } from "api";
import { requestAccessToken, requestAuthorization } from "api/auth";
import { getCurrentUser } from "api/services";
import { reducerCases, useStateProvider } from "context";
import LoginDialog from "./LoginDialog";
import { Player } from "features/player";
import { useRef } from "react";
import { Footer } from "./footer";
import { scrollbarStyle, useErrorHandler } from "utils";

export default function Root() {
  const [searchParams] = useSearchParams();
  const [{ search, searchType, userToken, currentlyPlaying }, 
    dispatch] = useStateProvider();
  const mainRef = useRef();
  const location = useLocation();
  const { handleError } = useErrorHandler();
  
  useEffect(() => {
    mainRef.current.scrollTo(0, 0);
  }, [location, search, searchType]);

  useEffect(() => {
    if (localStorage.getItem("user_token")) {
      getCurrentUser()
        .then(() => {
          dispatch({ type: reducerCases.USER_TOKEN, 
            userToken: localStorage.getItem("user_token") });
        })
        .catch((error) => {
          handleError();
        })
    } else {
      const code = searchParams.get("code");
      if (!code) { //no login
        requestAuthorization()
          .then((token) => {
            localStorage.clear();
            localStorage.setItem("token", token);
            dispatch({ type: reducerCases.TOKEN, token });
          })
      } else {
        window.history.pushState("", "", REDIRECT_URI); //remove query from url
        requestAccessToken(code)
          .then((tokenData) => {
            localStorage.clear();
            localStorage.setItem("user_token", tokenData.access_token);
            // localStorage.setItem("refresh_token", refresh_token);
            dispatch({ type: reducerCases.USER_TOKEN, 
              userToken: tokenData.access_token });
          });
      }
    }
  }, []);

  return (
    <Stack direction="column" bgcolor="black">
      <Stack direction="row" spacing={1} 
        height={ userToken && currentlyPlaying ? "calc(100vh - 80px)" : "100vh" } 
        overflow="hidden">
        <Sidebar/>
        <Box flex={1} overflow="auto" height="100%"
          ref={mainRef}
          sx={scrollbarStyle}>
          <Header/>
          <Box p={2} bgcolor="#121212">
            {/* sx={{ backgroundImage: "linear-gradient(rgb(32, 87, 100), #121212)" }} */}
            <Outlet/>
          </Box>
          <Footer/>
        </Box>
      </Stack>
      {
        userToken ? <Player/> : <LoginDialog/>
      }
    </Stack>
  );
}