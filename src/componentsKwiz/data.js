import he from "he";

const getData = async () => {
  try {
    const response = await fetch(import.meta.env.VITE_API_URL);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();

    if (result.response_code !== 0) {
      throw new Error(`API error: response_code ${result.response_code}`);
    }

    return result.results.map((q) => ({
      ...q,
      question: he.decode(q.question),
      correct_answer: he.decode(q.correct_answer),
      incorrect_answers: q.incorrect_answers.map(he.decode),
    }));
  } catch (error) {
    console.error(error.message);
  }
};

export default getData;
