import { useSession } from "next-auth/react";
import ProfileImage from "../../components/ProfileImage/ProfileImage";
import styles from "./index.module.scss";
const MyPage = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <div id={styles.mypage}>
        <h2 className={styles.headtext}>{session.user.name} 님</h2>
        <div id={styles.activeinfo}>
          <div>
            <h4>작성 게시글 수</h4>
            <h5>3</h5>
          </div>
          <div>
            <h4>작성 댓글 수</h4>
            <h5>3</h5>
          </div>
        </div>
        <h3 className={styles.headtext}>{">"} 프로필 이미지 변경</h3>
        <ProfileImage></ProfileImage>
      </div>
    );
  }
};
export default MyPage;
