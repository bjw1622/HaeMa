import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.scss";
import { useSession, signIn, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <div id={styles.nav}>
        <div id={styles.navlogo}>
          <Link href="/home">
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
              <h5>
                안녕하세요, <Link href="/mypage">{session.user.name}</Link>님
              </h5>
            </li>
            <li className={styles.navli}>
              <Link className={styles.navlink} href="/home">
                대시 보드
              </Link>
            </li>
            <li className={styles.navli}>
              <Link className={styles.navlink} href="/mypage">
                마이페이지
              </Link>
            </li>
            <li className={styles.navli}>
              <button onClick={() => signOut()}>Sign out</button>
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
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
              <button onClick={() => signIn()}>Sign in</button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
};
export default Navbar;
