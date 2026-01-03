import CalcInput from "./components/CalcInput";
import CalcKeypad from "./components/CalcKeypad";
import { useState } from "react";
import styles from "./App.module.css";

function App() {
  let KeyButtons = [
    "C",
    1,
    2,
    "+",
    3,
    4,
    "-",
    5,
    6,
    "*",
    7,
    8,
    "/",
    "=",
    9,
    0,
    ".",
  ];
  const [Value, setValue] = useState("");
  const operators = ["+", "-", "*", "/"];

  const OnButtonClicked = (btn) => {
    const lastChar = Value.slice(-1);

    if (!isNaN(btn)) {
      setValue((prev) => (prev === "Error" ? btn : prev + btn));
    } else if (btn === ".") {
      // Can't start with dot or after Error
      if (!Value || Value === "Error") return;

      const lastChar = Value.slice(-1);
      if (operators.includes(lastChar)) return; // prevent dot after operator

      const parts = Value.split(/[\+\-\*\/]/);
      const lastNumber = parts[parts.length - 1];

      if (!lastNumber.includes(".")) {
        setValue((prev) => prev + btn);
      }
    } else if (btn === "C") {
      setValue("");
    } else if (btn === "=") {
      if (!Value || operators.includes(lastChar) || Value === "Error") {
        setValue("Error");
      } else {
        try {
          setValue(eval(Value).toString());
        } catch {
          setValue("Error");
        }
      }
    } else if (operators.includes(btn)) {
      if (!Value || operators.includes(lastChar)) {
        setValue("Error");
      } else {
        setValue((prev) => prev + btn);
      }
    }
  };

  return (
    <>
      <div className={styles.MyCalc}>
        <CalcInput value={Value} />
        <CalcKeypad
          KeyButtons={KeyButtons}
          handleOnButtonClicked={OnButtonClicked}
        />
      </div>
    </>
  );
}

export default App;
