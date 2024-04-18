import React from 'react';

interface Question {
  id: number;
  questionText: string;
  incorrectRate: number;
}

const IncorrectRate = () => {
  // Replace this with your actual data
  const questions: Question[] = [
    { id: 1, questionText: 'Question 1', incorrectRate: 0.8 },
    { id: 2, questionText: 'Question 2', incorrectRate: 0.6 },
    { id: 3, questionText: 'Question 3', incorrectRate: 0.9 },
    { id: 4, questionText: 'Question 4', incorrectRate: 0.4 },
    { id: 5, questionText: 'Question 5', incorrectRate: 0.7 },
  ];

  // Sort questions by incorrect rate in descending order
  const sortedQuestions = questions.sort((a, b) => b.incorrectRate - a.incorrectRate);

  // Get the top 3 questions
  const top3Questions = sortedQuestions.slice(0, 3);

  return (
    <div>
      <div>최근 오답율 높은 문제 Top 3</div>
      <div>학생들이 최근 가장 어려워하는 문제들를 알려드립니다.</div>
      <div>
        {top3Questions.map((question) => (
          <div key={question.id}>
            {question.questionText} - Incorrect Rate: {question.incorrectRate}
          </div>
        ))}
      </div>
    </div>
  );
};

export default IncorrectRate;