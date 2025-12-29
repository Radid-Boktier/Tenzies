export default function Die({ value, clickDdice, backgroundColor }) {
  return (
    <button className="dice" onClick={clickDdice} style={{ backgroundColor }}>
      {value}
    </button>
  );
}
