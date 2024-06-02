import { Box, LinearProgress, Typography } from '@mui/material';

interface ProgressBarProps {
  current: number;
  maximum: number;
}

const ProgressBar = ({ current, maximum }: ProgressBarProps) => {
  return (
    <Box sx={{ marginBottom: '50px', width: 300 }}>
      <LinearProgress
        variant="determinate"
        value={(current / maximum) * 100}
        sx={{
          borderRadius: '50px',
          height: '20px',
          bgcolor: 'gray',
          '& .MuiLinearProgress-bar': {
            bgcolor: 'black',
          },
        }}
      />
      <Typography variant="body1" sx={{ fontWeight: 'bold', textAlign: 'center', marginTop: '5px' }}>
        {`${current} / ${maximum}`}
      </Typography>
    </Box>
  );
};

export default ProgressBar;
