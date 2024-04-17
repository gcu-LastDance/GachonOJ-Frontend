import React from 'react';

const OngoingExams = () => {
  // Replace this with your actual data
  const exams = [
    { id: 1, name: 'Exam 1' },
    { id: 2, name: 'Exam 2' },
    { id: 3, name: 'Exam 3' },
    // Add more exams as needed
  ];

  return (
    <div className="flex overflow-y-auto max-w-50">
      {exams.map((exam) => (
        <div key={exam.id} className="mb-2 p-2 border border-gray-400">
          <h3 className="text-lg font-semibold">{exam.name}</h3>
          {/* Add more exam details here */}
        </div>
      ))}
    </div>
  );
};

export default OngoingExams;