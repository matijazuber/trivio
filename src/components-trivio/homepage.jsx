import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();

  const goToNextPage = () => {
    navigate("/main");
  };

  return (
    <>
      <main>
        <div className="name">Trivio</div>
        <p className="homepage-paragraph">
          Think you know it all? Put your knowledge to the test across
          categories like science, history, pop culture, and more.{" "}
        </p>
        <button onClick={goToNextPage} className="homepage-button">
          Start kwiz
        </button>
      </main>
    </>
  );
};

export default Homepage;
