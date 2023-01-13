import Link from "next/link";
import { useEffect } from "react";
import styles from "./index.module.scss";
const Write = () => {
  useEffect(() => {
    const btnBold = document.getElementById("btn-bold");
    const btnItalic = document.getElementById("btn-italic");
    const btnUnderline = document.getElementById("btn-underline");
    const btnStrike = document.getElementById("btn-strike");
    const btnOrderedList = document.getElementById("btn-ordered-list");
    const btnUnorderedList = document.getElementById("btn-unordered-list");

    btnBold.addEventListener("click", function () {
      setStyle("bold");
    });

    btnItalic.addEventListener("click", function () {
      setStyle("italic");
    });

    btnUnderline.addEventListener("click", function () {
      setStyle("underline");
    });

    btnStrike.addEventListener("click", function () {
      setStyle("strikeThrough");
    });

    btnOrderedList.addEventListener("click", function () {
      setStyle("insertOrderedList");
    });

    btnUnorderedList.addEventListener("click", function () {
      setStyle("insertUnorderedList");
    });

    function setStyle(style) {
      document.execCommand(style);
    }
  }, []);

  return (
    <div id={styles.write}>
      <div className={styles.writeinfo}>
        <label className={styles.writelabel} htmlFor="">
          제목
        </label>
        <input
          className={styles.writeinputs}
          type="text"
          placeholder="해?마!"
        />
      </div>

      <div className={styles.writeinfo}>
        <label className={styles.writelabel} htmlFor="">
          작성자
        </label>
        <input
          className={styles.writeinputs}
          type="text"
          placeholder="관리자"
          readOnly
        />
      </div>

      <div>
        <label className={styles.writelabel} htmlFor="">
          내용
        </label>
        <div className={styles.buttontools}>
          <button id="btn-bold">
            <b>B</b>
          </button>
          <button id="btn-italic">
            <i>I</i>
          </button>
          <button id="btn-underline">
            <u>U</u>
          </button>
          <button id="btn-strike">
            <s>S</s>
          </button>
          <button id="btn-ordered-list">OL</button>
          <button id="btn-unordered-list">UL</button>
          <button id="btn-image">IMG</button>
        </div>
        <div id={styles.writeinput} contentEditable="true"></div>
      </div>
      <Link href={"/home"}>
        <button id={styles.writebutton}>글작성</button>
      </Link>
    </div>
  );
};
export default Write;
