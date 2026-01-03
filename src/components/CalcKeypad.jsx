import CalcButton from "./CalcButton";
import styles from "./CalcKeypad.module.css";
function CalcKeypad({ KeyButtons, handleOnButtonClicked }) {
  return (
    <>
      <div className={styles.Container}>
        {KeyButtons.map((value, index) => (
          <CalcButton
            key={index}
            handleOnButtonClicked={handleOnButtonClicked}
            value={value}
          />
        ))}
      </div>
    </>
  );
}

export default CalcKeypad;
