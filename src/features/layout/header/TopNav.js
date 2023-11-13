import { Avatar, Button, Divider, IconButton, Menu, MenuItem } from "@mui/material";
import { redirectUserAuthorization } from "api/auth";
import { getCurrentUser } from "api/services";
import { reducerCases, useStateProvider } from "context";
import React, { useEffect, useState } from "react";
import { buttonStyle, mapCurrentUser, setLocalStorageData, useErrorHandler } from "utils";

export default function TopNav() {
  const [{ userToken, userInfo }, dispatch] = useStateProvider();
  const { handleError } = useErrorHandler();

  useEffect(() => {
    if (userToken) {
      getCurrentUser()
        .then((userData) => {
          const newUser = mapCurrentUser(userData);
          const { id, display_name, email, image, country } = newUser;
          setLocalStorageData({ id, display_name, email, image, country });
          
          const userInfo = {id, display_name, email, image, country};
          dispatch({ type: reducerCases.USER, userInfo });
        })
        .catch((error) => {
          handleError();
        })
    }
  }, [userToken]);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  const handleLogout = (event) => {
    event.preventDefault();
    localStorage.clear();
    window.location.reload();
    window.location.href = "/";
  }

  return (
    <>
    {
      userInfo ?
      <>
        <IconButton
          size="small"
          onClick={handleClick}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}>
          <Avatar src={userInfo.image} alt={userInfo.display_name}
            sx={{ width: 32, height: 32 }}/>
        </IconButton>

        <Menu dense="true"
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem>
            {userInfo.display_name}
          </MenuItem>
          <Divider/>
          <MenuItem onClick={handleLogout}>
            Log out
          </MenuItem>
        </Menu>
      </>
     :
      <Button onClick={redirectUserAuthorization} 
        variant="contained" sx={buttonStyle}>
        Log in
      </Button>
    }
    </>
  );
}