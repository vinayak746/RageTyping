import { useState, useEffect } from "react";
import { generateRandomWords } from "../utils/wordGenerator";

function TypingTest({ onEnd }) {
  const [text, setText] = useState(() => generateRandomWords(30));
  const [input, setInput] = useState("");
  const [timeLeft, setTimeLeft] = useState(30);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    let timer;
    if (started && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    } else if (timeLeft === 0) {
      calculateWPM();
    }
    return () => clearInterval(timer);
  }, [started, timeLeft]);

  const handleChange = (e) => {
    setInput(e.target.value);
    if (!started) setStarted(true);

    // Annoying mechanics
    if (Math.random() < 0.05)
      setText((prev) => prev.split("").reverse().join(""));
    if (Math.random() < 0.07) setInput((prev) => prev + " ");
    if (Math.random() < 0.03) setInput((prev) => prev.toUpperCase());
    if (Math.random() < 0.05) alert("Why are you still trying? 😂");
  };

  const calculateWPM = () => {
    const wordsTyped = input.trim().split(/\s+/).length;
    const minutes = 30 / 60;
    const wpm = Math.round(wordsTyped / minutes);
    onEnd(wpm);
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl mb-4">Typing Test: Good Luck!</h2>
      <p>Type this sentence:</p>
      <p className="font-bold mb-2">{text}</p>
      <textarea
        className="w-64 h-20 p-2 border"
        value={input}
        onChange={handleChange}
        disabled={timeLeft === 0}
      />
      <div className="mt-4">
        <p className="text-red-500">Time left: {timeLeft}s</p>
      </div>
    </div>
  );
}

export default TypingTest;
