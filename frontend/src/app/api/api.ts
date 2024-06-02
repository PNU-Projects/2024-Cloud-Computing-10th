import axios from 'axios';

interface Answer {
  questionId: number;
  answer: number;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getQuestion = async () => {
  try {
    const response = await api.get('/mbti/start');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const postAnswer = async (answers: Answer[]) => {
  try {
    const response = await api.post('/mbti/submit', { answers });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getResult = async () => {
  try {
    const response = await api.get('/mbti/result');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
