import Homepage from "./components-trivio/homepage";
import QuizTime from "./components-trivio/main";
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
