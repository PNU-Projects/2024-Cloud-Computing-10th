'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { Box, CircularProgress } from '@mui/material';

import ProgressBar from '@/components/ProcessBar';
import QuestionCard from '@/components/QuestionCard';
import AnswerButton from '@/components/AnswerButton';

import { getQuestion, postAnswer } from '../api/api';

interface Question {
  id: number;
  question1: string;
  question2: string;
}

interface Answer {
  questionId: number;
  answer: number;
}

const Page = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const questionsData = await getQuestion();
        setQuestions(questionsData);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch questions:', error);
      }
    };
    fetchQuestion();
  }, []);

  const handleOnClick = async (questionId: number, answerId: number) => {
    setAnswers((prevAnswers) => [...prevAnswers, { questionId, answer: answerId }]);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      try {
        await postAnswer([...answers, { questionId, answer: answerId }]);
        router.push('/result');
      } catch (error) {
        console.error('Failed to fetch answers:', error);
      }
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

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
      {loading ? (
        <CircularProgress color="inherit" />
      ) : (
        <>
          <ProgressBar current={currentQuestionIndex + 1} maximum={questions.length} />
          {currentQuestion && (
            <>
              <QuestionCard
                key={currentQuestion.id}
                id={currentQuestion.id}
                content="본인에게 더 알맞은 답안을 고르시오."
              />
              <AnswerButton
                key={`${currentQuestion.id}-1`}
                content={currentQuestion.question1}
                onClick={() => handleOnClick(currentQuestion.id, 1)}
              />
              <AnswerButton
                key={`${currentQuestion.id}-2`}
                content={currentQuestion.question2}
                onClick={() => handleOnClick(currentQuestion.id, 2)}
              />
            </>
          )}
        </>
      )}
    </Box>
  );
};

export default Page;
