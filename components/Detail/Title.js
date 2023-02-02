import styles from "./index.module.scss";
import TitleKebabBtn from "./TitleKebabBtn";
import { db } from "../../pages/api/firebaseConfig";
import {
  collection,
  deleteDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

const Title = (props) => {
  const removeBoard = async () => {
    // 댓글 삭제
    if (window.confirm("삭제 하시겠습니까?")) {
      const boardListCollectionCollectionRef = collection(db, "Reply");
      const replyListQuery = query(
        boardListCollectionCollectionRef,
        where("boardId", "==", `${props.boardId}`)
      );
      const data = await getDocs(replyListQuery);
      if (data.docs.length !== 0) {
        data.docs.map((item) => {
          deleteDoc(item.ref);
        });
      }
    }
  };
  return (
    <div id={styles.detailTitle}>
      <h2>{props.title}</h2>
      <div id={styles.titleInfo}>
        <h4>{props.writer}</h4>
        <TitleKebabBtn removeBoard={removeBoard} />
      </div>
    </div>
  );
};
export default Title;
