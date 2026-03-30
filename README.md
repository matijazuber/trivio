# Trivio

A React-based trivia quiz app powered by the [Open Trivia Database](https://opentdb.com/) API.

## Features

- Fetches multiple-choice trivia questions in real time
- Medium difficulty questions with randomized answer order
- Clean, decoded HTML entities using `he`
- Environment-based API configuration with Vite

## Tech stack

- React
- Vite
- Open Trivia DB API
- he (HTML entity decoder)

## Getting started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/kwiz.git
   cd kwiz
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the project root:

   ```
   VITE_API_URL=https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple
   ```

4. Start the dev server:
   ```bash
   npm run dev
   ```

## License

MIT
