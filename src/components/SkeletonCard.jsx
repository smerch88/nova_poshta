import * as React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

export const SkeletonCard = () => {
  return (
    <Box
      pt={3}
      sx={{
        width: '100%',
        height: { xs: 340, sm: 220, md: 152, lg: 160, xl: 160 },
      }}
    >
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
    </Box>
  );
};
