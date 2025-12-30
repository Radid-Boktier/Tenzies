# 🎲 Tenzies Dice Game

A clean and interactive Tenzies Dice Game built with **React** and **CSS**.
This project challenges players to roll dice until all dice show the same value, with a stopwatch tracking completion time.

The game is structured with **component-based architecture**, **React hooks**, and **accessibility-first design**.

---

## 📷 Preview

![Photo Editor Preview](https://github.com/Radid-Boktier/Photo-Editor/blob/main/Image-editor.png?raw=true)

---

### 🌐 Live Demo
🚀 **Deployed on Vercel**  
[Play Tenzies](tenzies-dice-game.vercel.app)

---
## 🚀 Features

### 🎯 Game Module
- Roll 10 dice with random values (1–6)
- Click a die to hold / unhold its value
- Reroll only unheld dice
- Automatic win detection when all dice match

### ⏱ Stopwatch Module
- Starts automatically on first roll
- Displays hours, minutes, and seconds
- Stops when the game is won
- Resets on starting a new game
- Interval safely managed using useRef

### 🎉 Win Experience
- Confetti animation on victory
- Dynamic action button: Start / Roll Dice / New Game
- Completion time clearly displayed
- Screen reader announcements on winning

### ♿ Accessibility
- Keyboard focus management using useRef
- Screen reader support using aria-live
- Proper aria-label and aria-pressed usage
- Fully keyboard-accessible gameplay

### 🧠 Tech Stack
- React (Hooks-based architecture)
- CSS (custom styling)
- Vite (development & build tool)
- nanoid (unique dice IDs)
- react-confetti (win animation)
- Vercel (deployment)

### 🧱 Architecture
This project follows a component-driven architecture:
- Separation of UI and game logic
- Derived state calculation (gameWon)
- Stopwatch and game lifecycle managed via useEffect and useRef
- Clean, readable JSX and CSS structure

