export default function Die({ value, isHeld, clickDdice, backgroundColor }) {
  return (
    <button
      className="dice"
      onClick={clickDdice}
      style={{ backgroundColor }}
      aria-pressed={isHeld}
      aria-label={`Die with value ${value}, 
            ${isHeld ? 'held' : 'not held'}`}
    >
      {value}
    </button>
  );
}
