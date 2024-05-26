import { Box, Typography } from '@mui/material';

interface ResultCardProps {
  developer: string;
  comment: string;
}

const ResultCard = ({ developer, comment }: ResultCardProps) => {
  return (
    <Box>
      <Typography variant="h4" component="div" gutterBottom>
        {developer}
      </Typography>
      <Typography variant="body1" component="div">
        {comment}
      </Typography>
    </Box>
  );
};

export default ResultCard;
