import CalcButton from "./CalcButton";
import styles from "./CalcKeypad.module.css";
function CalcKeypad({ KeyButtons }) {
  return (
    <>
      <div className={styles.Container}>
        {KeyButtons.map((value, index) => (
          <CalcButton key={index} value={value} />
        ))}
      </div>
    </>
  );
}

export default CalcKeypad;
