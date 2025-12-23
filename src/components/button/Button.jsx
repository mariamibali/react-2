"use client";
import styles from "./Button.module.css";

const Button = ({ title, handleClick }) => {
  return (
    <button className={styles.deleteBtn} onClick={handleClick}>
      {title}
    </button>
  );
};

export default Button;
