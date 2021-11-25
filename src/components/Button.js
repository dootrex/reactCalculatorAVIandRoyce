import "../styles/Button.css";

export default function Button({ clickHandler, type, className, text, value }) {
  return (
    <button
      style={{ gridArea: className }}
      onClick={() => {
        clickHandler(value, type);
      }}
    >
      {text}
    </button>
  );
}
