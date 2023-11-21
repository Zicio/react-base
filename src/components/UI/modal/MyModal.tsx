import styles from "./MyModal.module.css";

const MyModal: React.FC<{
  children: React.ReactNode;
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ children, visible, setVisible }) => {
  return (
    <div
      className={`${styles.myModal} ${visible ? styles.active : ""}`}
      onClick={() => {
        setVisible(false);
      }}
    >
      <div
        className={styles.myModalContent}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  );
};
export default MyModal;
