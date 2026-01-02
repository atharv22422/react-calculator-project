import styles from "./CalcButton.module.css";

function CalcButton({ value }) {
  return (
    <>
      <button className={styles.buttons}>{value}</button>
    </>
  );
}

export default CalcButton;
