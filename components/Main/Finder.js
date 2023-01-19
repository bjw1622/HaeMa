import styles from "./index.module.scss";
const Finder = () => {
  return (
    <div className={styles.find}>
      <select>
        <option>제목</option>
        <option>작성자</option>
      </select>
      <div>
        <input type="text" />
        <button>검색</button>
      </div>
    </div>
  );
};
export default Finder;
