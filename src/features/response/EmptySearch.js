import { Container, Typography } from "@mui/material";
import React from "react";

export default function EmptySearch({ type, search }) {
  return (
    <Container sx={{ mt: 20 }}>
      <Typography variant="h4" textAlign="center">
        No {type} found for "{search}"
      </Typography>
      <Typography variant="h6" textAlign="center">
        Please make sure your words are spelled correctly, or use fewer or different keywords.
      </Typography>
    </Container>
  );
}