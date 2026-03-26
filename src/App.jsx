import Homepage from "./componentsKwiz/homepage";
import QuizTime from "./componentsKwiz/quizTime";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/quizTime" element={<QuizTime />} />
      </Routes>
    </>
  );
};

export default App;
