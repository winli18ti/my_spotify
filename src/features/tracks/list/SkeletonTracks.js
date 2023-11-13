import { Box, Grid, Skeleton } from "@mui/material";
import React from "react";
import { displayStyle } from "utils";

export default function SkeletonTracks({ offset }) {
  const items = [];
  for (let i = 0; i < 10; i++) {
    items.push(i);
  }
  return (
    <>
    {
      offset === 0 && 
      <Grid container mt={1} mb={3.5} wrap="nowrap">
        <Grid item pr={2} width={56}>
          <Skeleton/>
        </Grid>
        <Grid item pr={2} xs={10} md={6}>
          <Skeleton/>
        </Grid>
        <Grid component={Box} item pr={2} xs={4} 
          sx={displayStyle}>
          <Skeleton/>
        </Grid>
        <Grid item width={64}>
          <Skeleton/>
        </Grid>
      </Grid>
    }
    {
      items.map(i => 
        <Grid container item key={i} wrap="nowrap" mt={1} alignItems="center">
          <Grid item pr={2} width={56}>
            <Skeleton/>
          </Grid>
          <Grid item pr={2} xs={10} md={6} container wrap="nowrap">
            <Grid item mr={2}>
              <Skeleton width={40} height={40} mr={2}/>
            </Grid>
            <Grid item xs={12} container direction="column">
              <Grid item xs>
                <Skeleton/>
              </Grid>
              <Grid item xs>
                <Skeleton/>
              </Grid>
            </Grid>
          </Grid>
          <Grid component={Box} item pr={2} xs={4} 
            sx={displayStyle}>
            <Skeleton/>
          </Grid>
          <Grid item width={64}>
            <Skeleton/>
          </Grid>
        </Grid>
      )}
    </>
  );
}