import { nanoid } from 'nanoid';
import { useState } from 'react';
import Confetti from 'react-confetti';
import './App.css';
import Die from './components/Die';
function App() {
  const [dice, setDice] = useState(() => generateAllNewDice());

  const gameWon = dice.every((d) => d.value == dice[0].value && d.isHeld);
  // if (gameWon) {
  //   const { width, height } = useWindowSize();
  //   confetti(width, height);
  // }
  // console.log(gameWon);

  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }));
  }

  function rollDice() {
    if (gameWon) {
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
  // console.log(dice);
  return (
    <main className="main">
      {gameWon && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dice-container">
        {dice.map((value, index) => (
          <Die
            key={index}
            value={value.value}
            clickDdice={() => clickDdice(value.id)}
            backgroundColor={value.isHeld ? '#59E391' : 'white'}
          />
        ))}
      </div>
      <button id="roller-btn" onClick={rollDice}>
        {!gameWon ? 'Roll Dice' : 'New Game'}
      </button>
    </main>
  );
}

export default App;
