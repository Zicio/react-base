import { useState } from "react";
import PostsList from "../components/postsList/PostsList";
import PostForm from "../components/postForm/PostForm";
import { IPost } from "../types";
import MySelect from "../components/UI/select/MySelect";

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

  const [selectedSort, setSelectedSort] = useState("");

  const createPost = (newPost: IPost) => {
    setPosts([...posts, newPost]);
  };

  const deletePost = (id: number) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const sortPosts = (sort: string) => {
    setSelectedSort(sort);
    setPosts(posts.sort((a, b) => a[sort].localeCompare(b[sort]))); //TODO
  };

  return (
    <>
      <PostForm create={createPost} />
      <hr style={{ margin: "15px" }} />
      <MySelect
        selectedSort={selectedSort}
        changeSort={setSelectedSort}
        defaultOption={{ value: "default", name: "Cортировка по" }}
        options={[
          { value: "body", name: "По описанию" },
          { value: "title", name: "По названию" },
        ]}
      />
      <PostsList posts={posts} remove={deletePost} title="Список постов" />
    </>
  );
};
export default MainPage;
