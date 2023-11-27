import { FC } from "react";
import { IPost } from "../../types";
import styles from "./postItem.module.css";
import MyButton from "../UI/button/MyButton";
import { useNavigate } from "react-router-dom";

const PostItem: FC<{
  post: IPost;
  index: number;
  remove: (id: number) => void;
}> = ({ post, index, remove }) => {
  const navigate = useNavigate();
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
      <div className={styles.post_item__btnBar}>
        <MyButton type="button" onClick={() => navigate(`/posts/${post.id}`)}>
          Открыть
        </MyButton>
        <MyButton type="button" onClick={removePost}>
          Удалить
        </MyButton>
      </div>
    </li>
  );
};
export default PostItem;
