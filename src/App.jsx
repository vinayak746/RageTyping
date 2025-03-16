import { useState } from "react";
import StartScreen from "./components/StartScreen";
import TypingTest from "./components/TypingTest";
import ResultScreen from "./components/ResultScreen";

function App() {
  const [gameState, setGameState] = useState("start");
  const [wpm, setWpm] = useState(0);

  const startGame = () => setGameState("typing");
  const endGame = (finalWpm) => {
    setWpm(finalWpm);
    setGameState("result");
  };

  return (
    <div className="h-screen bg-gray-900 text-white flex items-center justify-center">
      {gameState === "start" && <StartScreen onStart={startGame} />}
      {gameState === "typing" && <TypingTest onEnd={endGame} />}
      {gameState === "result" && <ResultScreen wpm={wpm} />}
    </div>
  );
}

export default App;
