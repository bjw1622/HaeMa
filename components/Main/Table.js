import { collection, getDocs, orderBy, query } from "firebase/firestore";
import Link from "next/link";
import { useEffect, useState } from "react";
import { db } from "../../pages/api/firebaseConfig";
import styles from "./index.module.scss";
const Table = () => {
  const [todoList, setTodoList] = useState([]);
  const todoListCollectionCollectionRef = collection(db, "Board");
  const getTodos = async () => {
    const data = await getDocs(
      query(todoListCollectionCollectionRef, orderBy("date"))
    );
    setTodoList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  useEffect(() => {
    getTodos();
  }, []);
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
          {todoList.map((item, num) => {
            console.log(item);
            return (
              <tr key={item.id}>
                <td className={styles.td}>{num + 1}</td>
                <td colSpan={4} className={styles.td}>
                  <Link className={styles.link} href="/detail">
                    {item.title}
                  </Link>
                </td>
                <td className={styles.td}>{item.writer}</td>
                <td className={styles.td}></td>
                <td className={styles.td}>{item.viewCount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
