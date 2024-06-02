'use client';

import Image from 'next/image';

import { Box, Button, Link, Typography } from '@mui/material';

import MainImage from '../assets/main.png';

const Page = () => {
  return (
    <Box sx={{ position: 'relative' }}>
      {/* 저작자 표시 */}
      <Typography
        component="a"
        href="https://kr.freepik.com/free-vector/hand-drawn-web-developers_12063795.htm#from_view=detail_alsolike"
        sx={{
          position: 'absolute',
          right: '8px',
          fontSize: '10px',
          color: 'gray',
          textDecoration: 'none',
        }}
      >
        @freepik
      </Typography>
      <Image src={MainImage} alt="MainImage" height={380} priority />
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
  );
};

export default Page;
