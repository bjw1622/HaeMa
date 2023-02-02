import styles from "./index.module.scss";
import TitleKebabBtn from "./TitleKebabBtn";
import { db } from "../../pages/api/firebaseConfig";
import { collection, deleteDoc, query, where } from "firebase/firestore";

const Title = (props) => {
  const removeBoard = async () => {
    // if (window.confirm("삭제 하시겠습니까?")) {
    const replyListColleciton = await deleteDoc(
      query(collection(db, "Reply"), where("boardId", "==", `${props.boardId}`))
    );
    // }
    console.log(props);
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
