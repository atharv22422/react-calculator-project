import CalcInput from "./components/CalcInput";
import CalcKeypad from "./components/CalcKeypad";
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

  return (
    <>
      <div className={styles.MyCalc}>
        <CalcInput />
        <CalcKeypad KeyButtons={KeyButtons} />
      </div>
    </>
  );
}

export default App;
