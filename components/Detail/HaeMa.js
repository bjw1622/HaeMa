import styles from "./index.module.scss";
const HaeMa = (props) => {
  return (
    <div id={styles.recommand}>
      <div className={styles.btnDiv}>
        <button id={styles.doBtn}>해?</button>
        <h3>{props.hae}</h3>
      </div>
      <div className={styles.btnDiv}>
        <button id={styles.dontBtn}>마!</button>
        <h3>{props.ma}</h3>
      </div>
    </div>
  );
};
export default HaeMa;
