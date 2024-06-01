import { Box, Typography } from '@mui/material';

interface QuestionCardProps {
  id: number;
  content: string;
}

const QuestionCard = ({ id, content }: QuestionCardProps) => {
  return (
    <Box
      sx={{
        border: '3px solid #000',
        borderRadius: '10px',
        padding: '10px',
        marginBottom: '10px',
        width: 500,
        height: 150,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Q{id}
      </Typography>
      <Typography variant="h5">{content}</Typography>
    </Box>
  );
};

export default QuestionCard;
