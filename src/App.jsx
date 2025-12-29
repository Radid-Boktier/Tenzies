import { nanoid } from 'nanoid';
import { useState } from 'react';
import './App.css';
import Die from './components/Die';

function App() {
  const [dice, setDice] = useState(generateAllNewDice());

  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }));
  }

  function rollDice() {
    // console.log('clicked');
    setDice((prevDice) =>
      prevDice.map((die) =>
        die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6) }
      )
    );
  }

  function clickDdice(event) {
    setDice((prevDice) => {
      const newDice = prevDice.map((die) =>
        die.id === event.target.id ? { ...die, isHeld: true } : die
      );
      return newDice;
    });
  }
  console.log(dice);
  return (
    <main className="main">
      <div className="dice-container">
        {dice.map((value, index) => (
          <Die
            key={index}
            value={value.value}
            clickDdice={clickDdice}
            id={value.id}
            backgroundColor={value.isHeld ? '#59E391' : 'white'}
          />
        ))}
      </div>
      <button id="roller-btn" onClick={rollDice}>
        Roll Dice
      </button>
    </main>
  );
}

export default App;
