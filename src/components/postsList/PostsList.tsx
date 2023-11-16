import { FC } from "react";
import styles from "./PostsList.module.css";
import { IPost } from "../../types";
import PostItem from "../postItem/PostItem";

const PostsList: FC<{ posts: IPost[]; title: string }> = ({ posts, title }) => {
  return (
    <>
      <h2 className={styles.posts_list__title}>{title}</h2>
      <ol className={styles.posts_list}>
        {posts.map((post, index) => (
          <PostItem key={post.id} post={post} index={index + 1} />
        ))}
      </ol>
    </>
  );
};
export default PostsList;
