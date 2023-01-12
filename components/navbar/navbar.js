import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.scss";
const Navbar = () => {
  return (
    <div id={styles.nav}>
      <div id={styles.navlogo}>
        <Link href="/">
          <Image src="/images/logo.png" alt="" width={80} height={80}></Image>
        </Link>
        <Link className={styles.navlink} href="/home">
          <div id={styles.navtitle}>
            <h1>해</h1>
            <h1 id={styles.titleone}>?</h1>
            <h1>마</h1>
            <h1 id={styles.titletwo}>!</h1>
          </div>
        </Link>
      </div>
      <div id={styles.navuser}>
        <ul id={styles.navuserinfo}>
          <li className={styles.navli}>
            <Link className={styles.navlink} href="/home">
              대시 보드
            </Link>
          </li>
          <li className={styles.navli}>
            <Link className={styles.navlink} href="/login">
              로그인
            </Link>
          </li>
          <li className={styles.navli}>
            <Link className={styles.navlink} href="/home">
              로그아웃
            </Link>
          </li>
          <li className={styles.navli}>
            <Link className={styles.navlink} href="/home">
              마이페이지
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
