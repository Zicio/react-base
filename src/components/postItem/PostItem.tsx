import { FC } from "react";
import { IPost } from "../../types";
import styles from "./postItem.module.css";
import MyButton from "../UI/button/MyButton";

const PostItem: FC<{
  post: IPost;
  index: number;
  remove: (id: number) => void;
}> = ({ post, index, remove }) => {
  const removePost = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    remove(post.id);
  };

  return (
    <li className={styles.post_item}>
      <div className={styles.post_item__title}>
        <span>{index}.</span>
        <h2>{post.title}</h2>
      </div>

      <p>{post.body}</p>
      <MyButton type="button" onClick={removePost}>
        Удалить
      </MyButton>
    </li>
  );
};
export default PostItem;
