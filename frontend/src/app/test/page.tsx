'use client';

import React, { useState } from 'react';
import { Box } from '@mui/material';
import ProgressBar from '@/components/ProcessBar';
import QuestionCard from '@/components/QuestionCard';
import AnswerButton from '@/components/AnswerButton';
import { answerData } from '@/mocks/answerData';
import { questionData } from '@/mocks/questionData';
import { useRouter } from 'next/navigation';

const Page = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const router = useRouter();

  const handleOnClick = () => {
    if (currentQuestionIndex < questionData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // TODO: 결과 페이지로 이동
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
        <AnswerButton key={answer.id} id={answer.id} content={answer.content} onClick={handleOnClick} />
      ))}
    </Box>
  );
};

export default Page;
