'use client';

import { Box, Button, Link } from '@mui/material';

import Image from 'next/image';

import MainImage from '../assets/main.png';

const Page = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <Image src={MainImage} alt="MainImage" width={400} height={400} />
        <Link href="/test">
          <Button
            variant="contained"
            color="primary"
            sx={{
              bgcolor: 'black',
              position: 'absolute',
              bottom: '-80px',
              left: '50%',
              transform: 'translateX(-50%)',
              ':hover': { bgcolor: 'gray' },
            }}
          >
            시작하기
          </Button>
        </Link>
      </Box>
    </Box>
  );
};
export default Page;
