import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { db } from "../../pages/api/firebaseConfig";
import styles from "./index.module.scss";
const Reply = (props) => {
  const { data: session } = useSession();
  const [inputReply, setInputReply] = useState("");
  const textInputValue = (event) => {
    setInputReply(event.target.value);
  };
  const addReply = async () => {
    const replyCollection = collection(db, "Reply");
    await addDoc(replyCollection, {
      boardId: props.boardId,
      content: inputReply,
      date: serverTimestamp(),
      email: session.user.email,
      writer: session.user.name,
      parentReplyNo: 0,
    });
    setInputReply("");
  };
  return (
    <div id={styles.reply}>
      <textarea
        id={styles.replyArea}
        placeholder="댓글을 입력해주세요"
        rows="5"
        onChange={textInputValue}
        value={inputReply}
      ></textarea>
      <button id={styles.replyBtn} onClick={addReply}>
        작성
      </button>
    </div>
  );
};
export default Reply;
