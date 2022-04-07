//Assingment completed by Amaninder(Avi) Gill and Royce WEe
import ButtonPanel from "./ButtonPanel";
import Display from "./Display";
import { useState } from "react";
import Calculate from "../globals/calculate";
import "../styles/Wrapper.css";

function App() {
  const [memory, setMemory] = useState("empty");
  const [current, setCurrent] = useState("0");
  const [operand, setOperand] = useState("");
  const [number, setNumber] = useState("start");
  function handleClick(value, type) {
    if (current === "0" && type === "number") {
      setCurrent(`${value}`);
    } else if (operand === "" && type === "number") {
      setCurrent(current + `${value}`);
    } else if (operand !== "" && number !== "start" && type === "number") {
      setNumber(number + `${value}`);
    } else if (operand !== "" && type === "number") {
      setNumber(`${value}`);
    } else if (type === "enter" && operand !== "") {
      setCurrent(`${Calculate(current, operand, number)}`);
      setOperand("");
      setNumber("start");
    } else if (value === "Percent") {
      setCurrent(Calculate(current, "Divide", "100"));
      setOperand("Multiply");
      setNumber("start");
    } else if (value === "Square Root") {
      setCurrent(Calculate(current, value, "0"));
    } else if (type === "operator") {
      if (number === "start") {
        setOperand(value);
      } else {
        setCurrent(`${Calculate(current, operand, number)}`);
        setOperand(value);
        setNumber("start");
      }
    } else if (value === "Clear") {
      if (operand === "") {
        setCurrent("0");
      } else {
        setNumber("start");
      }
    } else if (value === "All Clear") {
      setCurrent("0");
      setOperand("");
      setNumber("start");
    } else if (value === "Memory Save") {
      if (number === "start") {
        setMemory(`${current}`);
      } else {
        setMemory(`${number}`);
      }
    } else if (value === "Memory Clear") {
      setMemory("empty");
    } else if (value === "Memory Recall") {
      if (operand === "") {
        setCurrent(memory);
      } else {
        setNumber(memory);
      }
    } else if (value === "Memory Addition") {
      setMemory(`${Calculate(memory, "Add", current)}`);
    } else if (type === "memory" && value === "Memory Subtract") {
      setMemory(`${Calculate(memory, "Subtract", current)}`);
    } else if (type === "decimal") {
      if (operand !== "" && number !== "start" && number.indexOf(value) < 0) {
        setNumber(number + value);
      } else if (current.indexOf(value) < 0) {
        setCurrent(current + value);
      }
    } else if (type === "sign") {
      if (operand === "") {
        if (current[0] === "-") {
          setCurrent(`${Calculate(current, "Multiply", "-1")}`);
        } else {
          setCurrent("-" + current);
        }
      } else {
        if (number[0] === "-") {
          setNumber(`${Calculate(number, "Multiply", "-1")}`);
        } else {
          if (number === "start") {
            setNumber("-0");
          } else {
            setNumber("-" + number);
          }
        }
      }
    }
  }
  return (
    <div className="wrapper">
      <Display result={number === "start" ? current : number} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
}

export default App;
