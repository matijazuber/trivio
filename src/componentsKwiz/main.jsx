import { useEffect } from "react";
import { useState } from "react";
import getData from "./data";

const QuizTime = () => {
  const [question, setQuestion] = useState([]);

  useEffect(() => {
    getData().then((data) => {
      setQuestion(data);
    });
  }, []);

  return (
    <main className="mainLayout">
      {question.map((q, idx) => (
        <p className="questions" key={idx}>
          {q.question}
        </p>
      ))}
      <button>Check answers</button>
    </main>
  );
};

export default QuizTime;
