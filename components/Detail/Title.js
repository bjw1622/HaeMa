import styles from "./index.module.scss";
const Title = (props) => {
  return (
    <div id={styles.detailTitle}>
      <h2>{props.title}</h2>
      <h4>{props.writer}</h4>
    </div>
  );
};
export default Title;
