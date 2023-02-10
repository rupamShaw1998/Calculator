import { useState } from "react";
import "../styles/calculator.css";
import Button from "./Button";
import Input from "./Input";

const Calculator = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const addToText = (val) => {
    setText((text) => [...text, val]);
  };

  const calculateResult = () => {
    const input = text.join("");
    let a = 0,
      b = 0,
      op = "";
    for (let i = 0; i < input.length; i++) {
      if (isNaN(input[i])) {
        op = input[i];
        break;
      }
    }
    [a, b] = input.split(op);
    switch (op) {
      case "+":
        op = "add";
        break;
      case "-":
        op = "sub";
        break;
      case "*":
        op = "mul";
        break;
      case "/":
        op = "div";
    }

    fetch(`http://localhost:8080?a=${a}&b=${b}&op=${op}`)
      .then((res) => res.json())
      .then((data) => setResult(data.c))
      .catch((err) => {
        console.log(err);
      });
  };

  const resetInput = () => {
    setText("");
    setResult("");
  };

  const buttonColor = "#f2a33c";

  return (
    <div className="calculator">
      <div className="calc-wrapper">
        <Input text={text} result={result} />
        <div className="row">
          <Button symbol="7" handleClick={addToText} />
          <Button symbol="8" handleClick={addToText} />
          <Button symbol="9" handleClick={addToText} />
          <Button symbol="+" color={buttonColor} handleClick={addToText} />
        </div>
        <div className="row">
          <Button symbol="4" handleClick={addToText} />
          <Button symbol="5" handleClick={addToText} />
          <Button symbol="6" handleClick={addToText} />
          <Button symbol="-" color={buttonColor} handleClick={addToText} />
        </div>
        <div className="row">
          <Button symbol="1" handleClick={addToText} />
          <Button symbol="2" handleClick={addToText} />
          <Button symbol="3" handleClick={addToText} />
          <Button symbol="*" color={buttonColor} handleClick={addToText} />
        </div>
        <div className="row">
          <Button symbol="." handleClick={addToText} />
          <Button symbol="0" handleClick={addToText} />
          <Button symbol="=" handleClick={calculateResult} />
          <Button symbol="/" color={buttonColor} handleClick={addToText} />
        </div>
        <Button symbol="Clear" color="red" handleClick={resetInput} />
      </div>
    </div>
  );
};

export default Calculator;
