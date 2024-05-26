import { Box } from '@mui/material';
import ResultCard from '@/components/ResultCard';
import { resultData } from '@/mocks/resultData';

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
      <ResultCard developer={resultData.developer} comment={resultData.comment} />
    </Box>
  );
};
export default Page;
