import { Alert, Snackbar, Typography } from "@mui/material";
import React from "react";

export default function PlaylistSnackbar({ open, onClose, message, boldMessage }) {
  return (
    <Snackbar open={open} onClose={onClose} autoHideDuration={6000}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}>
      <Alert icon={false} sx={{ color: "white", bgcolor: "#2e77d0" }}>
        <Typography component="span">
          {message}
        </Typography>
        {
          boldMessage &&
          <Typography component="span" fontWeight="bold">
            &nbsp;{boldMessage}
          </Typography>
        }
      </Alert>
    </Snackbar>
  )
}