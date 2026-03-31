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
        <>
          <p className="questions" key={idx}>
            {q.question}
          </p>
          <div className="options-div">
            <button key={idx}>{q.correct_answer}</button>
            {q.incorrect_answers.map((ans, i) => (
              <button className="options" key={i}>
                {ans}
              </button>
            ))}
          </div>
        </>
      ))}
      <button className="answers">Check answers</button>
    </main>
  );
};

export default QuizTime;
