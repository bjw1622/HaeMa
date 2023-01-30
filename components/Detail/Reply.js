import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { db } from "../../pages/api/firebaseConfig";
import styles from "./index.module.scss";
const Reply = (props) => {
  const { data: session } = useSession();
  const [inputReply, setInputReply] = useState("");
  const [replyList, setReplyList] = useState([]);

  const textInputValue = (event) => {
    setInputReply(event.target.value);
  };

  const getReplyList = async () => {
    const replyListColleciton = await getDocs(
      query(
        collection(db, "Reply"),
        where("boardId", "==", `${props.boardId}`),
        orderBy("date")
      )
    );
    setReplyList(
      replyListColleciton.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
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
      profile: session.user.image,
    });
    setInputReply("");
    getReplyList();
  };

  useEffect(() => {
    getReplyList();
  }, []);

  return (
    <>
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
      <div id={styles.replyList}>
        <h3>
          댓글 {replyList.length} {">"}
        </h3>
        {replyList.map((item) => {
          return (
            <div key={item.id}>
              <div id={styles.replyItem}>
                <Image
                  id={styles.profile}
                  src={item.profile}
                  alt=""
                  width={50}
                  height={50}
                ></Image>
                <h4 id={styles.replyer}>{item.writer}</h4>
              </div>
              <div id={styles.replyContent}>{item.content}</div>
              <div id={styles.rereplyBtn}>
                <button>답글 쓰기</button>
                <button>답글 보기</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Reply;
