import type { Metadata } from 'next';

import { Box } from '@mui/material';

import Header from '@/components/Header';

import './globals.css';

export const metadata: Metadata = {
  title: '개발자 직군 검사',
  description: '개발자 직군 검사 테스트입니다.',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Header title="개발자 직군 검사" />
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
          {children}
        </Box>
      </body>
    </html>
  );
};

export default RootLayout;
