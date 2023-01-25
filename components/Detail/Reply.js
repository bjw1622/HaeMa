import styles from "./index.module.scss";
const Reply = () => {
  return (
    <div id={styles.reply}>
      <textarea
        id={styles.replyArea}
        placeholder="댓글을 입력해주세요"
        rows="5"
      ></textarea>
      <button id={styles.replyBtn}>작성</button>
    </div>
  );
};
export default Reply;
