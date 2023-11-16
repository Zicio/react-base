import { createContext, useState } from "react";
import PostsList from "../components/postsList/PostsList";
import PostForm from "../components/postForm/postForm";
import { IPost } from "../types";

export interface IPostsContext {
  posts: IPost[];
  setPosts: React.Dispatch<React.SetStateAction<IPost[]>>;
}
export const PostsContext = createContext<null | IPostsContext>(null);

const MainPage = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Post 1",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eu iaculis aliquet, nisl nisl aliquet nisl, eu iaculis nisl nisl euismod nisl.",
    },
    {
      id: 2,
      title: "Post 2",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eu iaculis aliquet, nisl nisl aliquet nisl, eu iaculis nisl nisl euism",
    },
    {
      id: 3,
      title: "Post 3",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eu iaculis aliquet, nisl nisl aliquet nisl, eu iaculis nisl nisl euawawdawdawdawdawdawdawdawd",
    },
  ]);

  return (
    <>
      <PostsContext.Provider value={{ posts, setPosts }}>
        <PostForm />
        <PostsList posts={posts} title="Список постов" />
      </PostsContext.Provider>
    </>
  );
};
export default MainPage;
