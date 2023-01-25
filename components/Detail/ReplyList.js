import styles from "./index.module.scss";
import Image from "next/image";
const ReplyList = () => {
  return (
    <div id={styles.replyList}>
      <h3>댓글 12 {">"}</h3>
      <div>
        <div id={styles.replyItem}>
          <Image src="/images/logo.png" alt="" width={50} height={50}></Image>
          <h4 id={styles.replyer}>관리자</h4>
        </div>
        <div id={styles.replyContent}>
          Me2day의 댓글 페이징 UI도 신선하기는 했고, 고민의 흔적이 느껴지는
          UI였습니다. 최근 글을 보려고 스크롤을 아래로 내린 상태에서 바로 이전
          페이지, 다음 페이지로 이동할 수 있는 버튼이 있어서 다음 태스크로의
          이동이 원활하게 이루어졌습니다. 다만 이전 댓글 버튼을 눌렀을 경우
          위치가 고정이 되어 결국에는 스크롤을 위로 올린다음 다시 내려야하는
          상황이 발생하게 되는 문제가 있었습
        </div>
        <div id={styles.rereplyBtn}>
          <button>답글 쓰기</button>
          <button>답글 보기</button>
        </div>
      </div>
      <div>
        <div id={styles.replyItem}>
          <Image src="/images/logo.png" alt="" width={50} height={50}></Image>
          <h4 id={styles.replyer}>관리자</h4>
        </div>
        <div id={styles.replyContent}>
          Me2day의 댓글 페이징 UI도 신선하기는 했고, 고민의 흔적이 느껴지는
          UI였습니다. 최근 글을 보려고 스크롤을 아래로 내린 상태에서 바로 이전
          페이지, 다음 페이지로 이동할 수 있는 버튼이 있어서 다음 태스크로의
          이동이 원활하게 이루어졌습니다. 다만 이전 댓글 버튼을 눌렀을 경우
          위치가 고정이 되어 결국에는 스크롤을 위로 올린다음 다시 내려야하는
          상황이 발생하게 되는 문제가 있었습
        </div>
        <button id={styles.rereplyBtn}>답글 쓰기</button>
        <button>답글 보기</button>
      </div>
    </div>
  );
};
export default ReplyList;
