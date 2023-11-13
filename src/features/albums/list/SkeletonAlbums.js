import React from "react";
import { Box, Grid, Skeleton, Stack, Typography } from "@mui/material";

export default function SkeletonAlbums() {
  const items = [];
  for (let i = 0; i < 20; i++) {
    items.push(i);
  }
  return (
    <>
      {items.map(i => 
        <Grid item key={i} xs={6} sm={4} md={3} lg={2.4}>
          <Box bgcolor="#181818" p={2} borderRadius={2}>
            <Stack alignItems="center">
              <Box width="100%" borderRadius={2} 
                bgcolor="#333333" sx={{ aspectRatio: 1 }}/>
            </Stack>
            <Stack mt={1}>
              <Typography variant="body1">
                <Skeleton/>
              </Typography>
              <Typography variant="body2">
                <Skeleton/>
              </Typography>
            </Stack>
          </Box>
        </Grid>
      )}
    </>
  );
}