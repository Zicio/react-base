import { FC } from "react";
import styles from "./Postslist.module.css";
import { IPost } from "../../types";
import PostItem from "../postItem/PostItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const PostsList: FC<{
  posts: IPost[];
  title: string;
  remove: (id: number) => void;
}> = ({ posts, title, remove }) => {
  if (!posts.length) {
    return (
      <span
        style={{
          display: "inline-block",
          width: "100%",
          marginTop: "20px",
          textAlign: "center",
        }}
      >
        Посты не найдены
      </span>
    );
  }
  return (
    <>
      <h2 className={styles.posts_list__title}>{title}</h2>
      <ol>
        <TransitionGroup className={styles.posts_list}>
          {posts.map((post) => (
            <CSSTransition key={post.id} timeout={500} classNames={"post"}>
              <PostItem post={post} index={post.id} remove={remove} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ol>
    </>
  );
};
export default PostsList;
