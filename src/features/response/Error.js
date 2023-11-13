import { Container, Typography } from "@mui/material";
import React from "react";

export default function Error() {
  return (
    <Container sx={{ mt: 20 }}>
      <Typography variant="h4" textAlign="center">
        Something went wrong.
      </Typography>
      <Typography variant="h6" textAlign="center">
        Please try again.
      </Typography>
    </Container>
  );
}