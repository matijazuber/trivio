import { useEffect } from "react";
import { useState } from "react";
import Loading from "./loading";
import getData from "./data";

const QuizTime = () => {
  const [question, setQuestion] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(null);

  const handleSelect = (questionIdx, answer) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionIdx]: answer }));
  };

  const resetGame = () => {
    setSelectedAnswers({});
    setScore(null);
    setGameOver(false);
  };

  const checkAnswers = () => {
    const result = question.filter(
      (q, idx) => selectedAnswers[idx] === q.correct_answer,
    ).length;
    setScore(result);
    setGameOver(true);
  };

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
      {question.map((q, idx) => (
        <section key={idx}>
          <p className="questions">{q.question}</p>
          <div className="options-div">
            {q.allAnswers.map((ans, i) => (
              <button
                disabled={gameOver}
                className={`options ${selectedAnswers[idx] === ans ? "selected" : ""}`}
                onClick={() => handleSelect(idx, ans)}
                key={`${idx}-${i}`}
              >
                {ans}
              </button>
            ))}
          </div>
        </section>
      ))}
      <button className="answers" onClick={gameOver ? resetGame : checkAnswers}>
        {gameOver ? "Reset game" : "Check answers"}
      </button>
      {score !== null && (
        <p className="score">
          You scored {score} / {question.length}
        </p>
      )}
    </main>
  );
};

export default QuizTime;
