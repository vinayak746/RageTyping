function StartScreen({ onStart }) {
  return (
    <div className="text-center space-y-4">
      <h1 className="text-4xl font-bold">Welcome to RageType!</h1>
      <p className="text-xl italic">A typing test that absolutely hates you.</p>
      <button
        className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded"
        onClick={onStart}
      >
        Start (Regret This)
      </button>
    </div>
  );
}

export default StartScreen;
