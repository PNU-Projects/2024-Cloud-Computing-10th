'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import { Box, CircularProgress, Typography } from '@mui/material';

import ResultCard from '@/components/ResultCard';

import { getResult } from '../api/api';
import ResultImage from '../../assets/result.png';

interface Result {
  developer: string;
  comment: string;
}

const Page = () => {
  const [result, setResult] = useState<Result>({ developer: '', comment: '' });
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchResult = async () => {
      try {
        const resultData = await getResult();
        setResult(resultData);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch result:', error);
      }
    };
    fetchResult();
  }, []);

  return (
    <>
      {loading ? (
        <CircularProgress color="inherit" />
      ) : (
        <>
          {/* 저작자 표시 */}
          <Typography
            component="a"
            href="https://www.flaticon.com/kr/free-icons"
            sx={{
              fontSize: '10px',
              color: 'gray',
              textDecoration: 'none',
            }}
          >
            Flat Icons - Flaticon
          </Typography>
          <Box sx={{ marginBottom: 2 }}>
            <Image src={ResultImage} alt="ResultImage" width={200} height={200} priority />
          </Box>
          <ResultCard developer={result.developer} comment={result.comment} />
        </>
      )}
    </>
  );
};

export default Page;
