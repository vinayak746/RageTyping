function ResultScreen({ wpm }) {
  const getCursedMessage = (wpm) => {
    if (wpm < 10) return "Did you type with your elbows? 🙃";
    if (wpm < 20) return "My grandma types faster than you! 🧓";
    if (wpm < 50) return "You're as slow as a broken keyboard. ⌨️";
    return "Okay, maybe you are not terrible... but still slow. 🐢";
  };

  return (
    <div className="text-center space-y-4">
      <h1 className="text-4xl font-bold text-yellow-300">Your WPM: {wpm}</h1>
      <p className="text-xl italic">{getCursedMessage(wpm)}</p>
      <button
        className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded"
        onClick={() => window.location.reload()}
      >
        Try Again (Suffer More)
      </button>
    </div>
  );
}

export default ResultScreen;
