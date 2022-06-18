import React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

export default function SkeletonTable() {
  return (
    <Box>
      <Skeleton variant="rectangular" animation="wave" />
      <br></br>
      <Skeleton variant="rectangular" animation="wave" />
      <br></br>
      <Skeleton variant="rectangular" animation="wave" />
      <br></br>
      <Skeleton variant="rectangular" animation="wave" />
      <br></br>
      <Skeleton variant="rectangular" animation="wave" />
      <br></br>
      <Skeleton variant="rectangular" animation="wave" />
      <br></br>
      <Skeleton variant="rectangular" animation="wave" />
    </Box>
  );
}
