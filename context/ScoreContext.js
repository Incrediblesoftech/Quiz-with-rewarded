// context/ScoreContext.js
import { createContext, useContext, useState, useEffect } from "react";

const ScoreContext = createContext();

export function ScoreProvider({ children }) {
  const [score, setScoreState] = useState(100);

  // Load score from localStorage on first load
  useEffect(() => {
    const storedScore = localStorage.getItem("quizScore");
    if (storedScore !== null) {
      setScoreState(parseInt(storedScore, 10));
    }
  }, []);

  // Save score to localStorage whenever it changes
  const setScore = (newScore) => {
    setScoreState(newScore);
    localStorage.setItem("quizScore", newScore);
  };

  return (
    <ScoreContext.Provider value={{ score, setScore }}>
      {children}
    </ScoreContext.Provider>
  );
}

export const useScore = () => useContext(ScoreContext);
