import React from "react";
import { Menu, MenuDivider, MenuGroup, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import styles from "./index.module.scss";
const KebabBtn = (props) => {
  return (
    <Menu
      id={styles.menu}
      arrow
      menuButton={<button id={styles.menuBtn}>...</button>}
    >
      <MenuGroup id={styles.menuGroup}>
        <MenuItem className={styles.groupBtn}>수정</MenuItem>
        <MenuItem
          className={styles.groupBtn}
          keydata={props.keydata}
          onClick={props.remove}
        >
          삭제
        </MenuItem>
      </MenuGroup>
    </Menu>
  );
};
export default KebabBtn;
