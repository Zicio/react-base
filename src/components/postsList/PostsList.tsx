import { FC } from "react";
import styles from "./PostsList.module.css";
import { IPost } from "../../types";
import PostItem from "../postItem/PostItem";

const PostsList: FC<{
  posts: IPost[];
  title: string;
  remove: (id: number) => void;
}> = ({ posts, title, remove }) => {
  return (
    <>
      <h2 className={styles.posts_list__title}>{title}</h2>
      {!posts.length ? (
        <span className={styles.post_list_notification}>Посты не найдены</span>
      ) : (
        <ol className={styles.posts_list}>
          {posts.map((post, index) => (
            <PostItem
              key={post.id}
              post={post}
              index={index + 1}
              remove={remove}
            />
          ))}
        </ol>
      )}
    </>
  );
};
export default PostsList;
