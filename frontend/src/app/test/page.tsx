'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Box } from '@mui/material';
import ProgressBar from '@/components/ProcessBar';
import QuestionCard from '@/components/QuestionCard';
import AnswerButton from '@/components/AnswerButton';
import { answerData } from '@/mocks/answerData';
import { questionData } from '@/mocks/questionData';

interface Answer {
  questionId: number;
  answer: number;
}

const Page = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const router = useRouter();

  const handleOnClick = (questionId: number, answerId: number) => {
    setAnswers((prevAnswers) => [...prevAnswers, { questionId, answer: answerId }]);

    if (currentQuestionIndex < questionData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      router.push('/result');
    }
  };

  return (
    <Box
      sx={{
        position: 'absolute',
        top: '45%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <ProgressBar current={currentQuestionIndex + 1} maximum={questionData.length} />
      {questionData.map(
        (question, index) =>
          index === currentQuestionIndex && (
            <QuestionCard key={question.id} id={question.id} content={question.content} />
          ),
      )}
      {answerData.map((answer) => (
        <AnswerButton
          key={answer.id}
          id={answer.id}
          content={answer.content}
          onClick={() => handleOnClick(questionData[currentQuestionIndex].id, answer.id)}
        />
      ))}
    </Box>
  );
};

export default Page;
