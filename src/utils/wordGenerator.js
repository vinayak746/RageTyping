const words = [
  "banana",
  "keyboard",
  "error",
  "javascript",
  "react",
  "confusion",
  "frustration",
  "pizza",
  "coding",
  "debug",
  "function",
  "curse",
  "timeout",
  "glitch",
  "password",
  "rage",
  "unbelievable",
  "internet",
  "random",
  "developer",
  "catastrophe",
  "loop",
  "crash",
  "firewall",
];

export const generateRandomWords = (count = 30) => {
  return Array.from(
    { length: count },
    () => words[Math.floor(Math.random() * words.length)]
  ).join(" ");
};
