import Image from "next/image";
import styles from "./index.module.scss";
const Detail = () => {
  return (
    <div className={styles.detail}>
      <div id={styles.detailTitle}>
        <h2>첫번째 게시글</h2>
        <h4>백재원</h4>
      </div>

      <div id={styles.detailWrite}>
        SNS에서 댓글은 댓글의 흐름에 따라 보여지나, 댓글의 수가 많아질 경우
        최근에 쓴 댓글들을 우선순위로 노출시켜야 합니다. 이 때 보통 UI 설계 시
        댓글 더보기 버튼을 넣어야 합니다. 이 때 댓글 더보기 버튼을 댓글 내용
        위에 넣어야 할지, 댓글 내용 아래 넣어야 할지 고민이 되었습니다. 이때도
        타 SNS들이 어떻게 UI를 설계하고 있는지 벤치마킹을 했습니다. Facebook과
        C로그는 댓글의 위에 댓글 더보기 버튼을 노출하였습니다. 그리고 Me2day는
        댓글 아래 댓글 페이징 UI를 제공했습니다. 댓글 더보기 버튼을 아래쪽에
        넣을 경우에는 대화의 흐름을 방해할 수 있다는 판단하에 댓글 더보기 버튼을
        상단에 노출하였습니다. 결과적으로 댓글의 위에 댓글 더보기 버튼을
        제공하였습니다.
      </div>

      <div id={styles.recommand}>
        <div className={styles.btnDiv}>
          <button id={styles.doBtn}>해?</button>
          <h3>12</h3>
        </div>
        <div className={styles.btnDiv}>
          <button id={styles.dontBtn}>마!</button>
          <h3>3</h3>
        </div>
      </div>

      <div id={styles.reply}>
        <textarea
          id={styles.replyArea}
          placeholder="댓글을 입력해주세요"
          rows="5"
        ></textarea>
        <button id={styles.replyBtn}>작성</button>
      </div>

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
          <button id={styles.rereplyBtn}>답글 쓰기</button>
          <button>답글 보기</button>
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
    </div>
  );
};
export default Detail;
