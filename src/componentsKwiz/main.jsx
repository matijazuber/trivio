import { useEffect } from "react";
import getData from "./data";

const QuizTime = () => {
  useEffect(() => getData().then((data) => console.log(data)), []);
  return <main className="mainLayout"></main>;
};

export default QuizTime;
