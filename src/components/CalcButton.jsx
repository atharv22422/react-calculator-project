import styles from "./CalcButton.module.css";

function CalcButton({ value, handleOnButtonClicked }) {
  return (
    <>
      <button
        className={styles.buttons}
        onClick={() => handleOnButtonClicked(value)}
      >
        {value}
      </button>
    </>
  );
}

export default CalcButton;
