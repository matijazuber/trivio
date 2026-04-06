import { useEffect } from "react";
import { useState } from "react";
import Loading from "./loading";
import getData from "./data";

const QuizTime = () => {
  const [question, setQuestion] = useState([]);
  const [loading, setLoading] = useState(true);

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  useEffect(() => {
    getData().then((data) => {
      const shuffled = data.map((q) => ({
        ...q,
        allAnswers: shuffleArray([q.correct_answer, ...q.incorrect_answers]),
      }));
      setQuestion(shuffled);
      setLoading(false);
    });
  }, []);

  if (loading) return <Loading></Loading>;

  return (
    <main className="mainLayout">
      {question.map((q, idx) => {
        const allAnswers = shuffleArray([
          q.correct_answer,
          ...q.incorrect_answers,
        ]);
        return (
          <section key={idx}>
            <p className="questions">{q.question}</p>
            <div className="options-div">
              {allAnswers.map((ans, i) => (
                <button className="options" key={`${idx}-${i}`}>
                  {ans}
                </button>
              ))}
            </div>
          </section>
        );
      })}
      <button className="answers">Check answers</button>
    </main>
  );
};

export default QuizTime;
