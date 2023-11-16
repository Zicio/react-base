import { FC } from "react";
import { IPost } from "../../types";
import styles from "./postItem.module.css";

const PostItem: FC<{ post: IPost; index: number }> = ({ post, index }) => {
  return (
    <li className={styles.post_item}>
      <div className={styles.post_item__title}>
        <span>{index}.</span>
        <h2>{post.title}</h2>
      </div>

      <p>{post.body}</p>
    </li>
  );
};
export default PostItem;
