import { MoreHoriz } from "@mui/icons-material";
import { IconButton, Menu, MenuItem, Tooltip } from "@mui/material";
import React, { useState } from "react";
import DeletePlaylistDialog from "./DeletePlaylistDialog";

export default function Options({ name, setOpenDialog, playlistId, playlistName }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  const handleEdit = () => {
    setOpenDialog(true);
  }

  return (
    <>
      <Tooltip title={`More options for ${name}`} placement="top">
        <IconButton disableRipple={true}
          id="options"
          aria-controls={open ? 'options-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}>
          <MoreHoriz sx={{ color: "#5e5e5e", fontSize: "30px" }}/>
        </IconButton>
      </Tooltip>
      <Menu
        id="options-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        MenuListProps={{
          'aria-labelledby': 'options'
        }}>
        <MenuItem onClick={handleEdit}>Edit details</MenuItem>
        <MenuItem onClick={() => setOpenDeleteDialog(true) }>Delete</MenuItem>
      </Menu>

      <DeletePlaylistDialog onClose={ () => setOpenDeleteDialog(false) }
        open={openDeleteDialog} id={playlistId} name={playlistName}/>
    </>
  );
}