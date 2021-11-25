import { calculatorButtons } from "../globals/calculator-button-data";
import Button from "./Button";
import "../styles/ButtonPanel.css";

export default function ButtonPanel({ clickHandler }) {
  return (
    <div className="buttonPanel">
      {calculatorButtons.map((calculatorButton, index) => {
        return (
          <Button
            key={index}
            clickHandler={clickHandler}
            type={calculatorButton.type}
            className={calculatorButton.className}
            text={calculatorButton.text}
            value={calculatorButton.value}
          />
        );
      })}
    </div>
  );
}
