import { InputHTMLAttributes } from "react";
import styles from "./MyInput.module.css";

const MyInput: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({
  ...props
}) => {
  return <input className={styles.myInput} {...props} />;
};
export default MyInput;
