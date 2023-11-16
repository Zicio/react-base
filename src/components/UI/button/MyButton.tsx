import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import style from "./MyButton.module.css";

interface IMyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const MyButton: FC<IMyButtonProps> = ({ children, ...props }) => {
  return (
    <button className={style.myBtn} {...props}>
      {children}
    </button>
  );
};
export default MyButton;
