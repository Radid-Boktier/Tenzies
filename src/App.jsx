import { nanoid } from 'nanoid';
import { useEffect, useRef, useState } from 'react';
import Confetti from 'react-confetti';
import './App.css';
import Die from './components/Die';
import StopWatch from './components/StopWatch';
function App() {
  const [dice, setDice] = useState(() => generateAllNewDice());
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  const gameWon = dice.every((d) => d.value == dice[0].value && d.isHeld);

  const buttonRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!running) return;
    intervalRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, [running]);

  useEffect(() => {
    if (gameWon) {
      clearInterval(intervalRef.current);
      buttonRef.current?.focus();
    }
  }, [gameWon]);

  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }));
  }

  function rollDice() {
    if (!running) setRunning(true);

    if (gameWon) {
      setTime(0);
      setRunning(false);
      setDice(generateAllNewDice());
      return;
    }
    setDice((prevDice) =>
      prevDice.map((die) =>
        die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6) }
      )
    );
  }

  function clickDdice(id) {
    setDice((prevDice) => {
      const newDice = prevDice.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die
      );
      return newDice;
    });
  }
  // console.log(gameWon);
  return (
    <main className="main">
      {gameWon && <Confetti />}
      <div aria-live="polite" className="sr-only">
        {gameWon && (
          <p>Congratulations! You won! Press "New Game" to start again.</p>
        )}
      </div>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <StopWatch time={time} />
      <div className="dice-container">
        {dice.map((value, index) => (
          <Die
            key={index}
            value={value.value}
            isHeld={value.isHeld}
            clickDdice={() => clickDdice(value.id)}
            backgroundColor={value.isHeld ? '#59E391' : 'white'}
          />
        ))}
      </div>
      <button id="roller-btn" ref={buttonRef} onClick={rollDice}>
        {!running ? 'Start' : running && !gameWon ? 'Roll Dice' : 'New Game'}
      </button>
    </main>
  );
}

export default App;
