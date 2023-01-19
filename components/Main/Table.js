import Link from "next/link";
import styles from "./index.module.scss";

const Table = () => {
  return (
    <div className={styles.home}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th className={styles.th}>#</th>
            <th className={styles.th}>제목</th>
            <th className={styles.th}>작성자</th>
            <th className={styles.th}>날짜</th>
            <th className={styles.th}>조회수</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.td}>1</td>
            <td colSpan={4} className={styles.td}>
              <Link className={styles.link} href="/detail">
                해마
              </Link>
            </td>
            <td className={styles.td}>관리자</td>
            <td className={styles.td}>3일전</td>
            <td className={styles.td}>12</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Table;
