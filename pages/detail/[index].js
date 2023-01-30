import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Content from "../../components/Detail/Content";
import HaeMa from "../../components/Detail/HaeMa";
import Reply from "../../components/Detail/Reply";
import Title from "../../components/Detail/Title";
import { db } from "../api/firebaseConfig";
import styles from "./index.module.scss";
const Detail = () => {
  const router = useRouter();
  const routerIndex = router.query.index;
  const [board, setBoard] = useState([]);
  const getBoard = async () => {
    const docRef = doc(db, "Board", routerIndex);
    const docSnap = await getDoc(docRef);
    setBoard(docSnap.data());
  };
  useEffect(() => {
    if (!router.isReady) return;
    getBoard();
  }, [router.isReady]);
  return (
    <div className={styles.detail}>
      <Title title={board.title} writer={board.writer} />
      <Content content={board.content} />
      <HaeMa hae={board.hae} ma={board.ma} />
      <Reply boardId={routerIndex} />
    </div>
  );
};
export default Detail;
