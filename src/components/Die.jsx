export default function Die({ value, clickDdice, id, backgroundColor }) {
  return (
    <button
      className="dice"
      onClick={clickDdice}
      id={id}
      style={{ backgroundColor }}
    >
      {value}
    </button>
  );
}
