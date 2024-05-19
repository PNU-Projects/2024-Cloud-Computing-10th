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
        <Box>{children}</Box>
      </body>
    </html>
  );
};

export default RootLayout;
