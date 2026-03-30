import Homepage from "./componentsKwiz/homepage";
import QuizTime from "./componentsKwiz/main";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/main" element={<QuizTime />} />
      </Routes>
    </>
  );
};

export default App;
