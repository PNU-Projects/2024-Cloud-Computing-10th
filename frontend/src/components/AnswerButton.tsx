import { Button } from '@mui/material';

interface AnswerButtonProps {
  content: string;
  onClick: () => void;
}

const AnswerButton = ({ content, onClick }: AnswerButtonProps) => {
  return (
    <Button
      variant="contained"
      color="primary"
      sx={{
        width: 500,
        height: 60,
        bgcolor: 'gray',
        borderRadius: '50px',
        bottom: '-40px',
        marginTop: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        ':hover': { bgcolor: 'black' },
      }}
      onClick={onClick}
    >
      {content}
    </Button>
  );
};

export default AnswerButton;
