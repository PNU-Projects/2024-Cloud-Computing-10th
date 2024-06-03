import { Box, Typography } from '@mui/material';

interface ResultCardProps {
  developer: string;
  comment: string;
}

const ResultCard = ({ developer, comment }: ResultCardProps) => {
  return (
    <Box
      sx={{
        border: '3px solid #000',
        borderRadius: '10px',
        padding: '20px',
      }}
    >
      <Typography variant="h4" color="darkslateblue" component="div" gutterBottom>
        {developer}
      </Typography>
      <Typography variant="body1" component="div">
        {comment}
      </Typography>
    </Box>
  );
};

export default ResultCard;
