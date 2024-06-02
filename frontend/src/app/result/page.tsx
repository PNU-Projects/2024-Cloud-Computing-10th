'use client';

import { useEffect, useState } from 'react';

import { Box, CircularProgress } from '@mui/material';

import ResultCard from '@/components/ResultCard';

import { getResult } from '../api/api';

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
      {loading ? (
        <CircularProgress color="inherit" />
      ) : (
        <ResultCard developer={result.developer} comment={result.comment} />
      )}
    </Box>
  );
};
export default Page;
