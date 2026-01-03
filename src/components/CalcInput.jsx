import styles from "./CalcInput.module.css";

function CalcInput({ value }) {
  return <input className={styles.input} type="text" value={value} readonly />;
}

export default CalcInput;
