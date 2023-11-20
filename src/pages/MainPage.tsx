import { useState } from "react";
import PostsList from "../components/postsList/PostsList";
import PostForm from "../components/postForm/PostForm";
import { IPost, sort } from "../types";
import MySelect from "../components/UI/select/MySelect";

const MainPage = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Aost 1",
      body: "Corem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eu iaculis aliquet, nisl nisl aliquet nisl, eu iaculis nisl nisl euismod nisl.",
    },
    {
      id: 2,
      title: "Bost 2",
      body: "Borem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eu iaculis aliquet, nisl nisl aliquet nisl, eu iaculis nisl nisl euism",
    },
    {
      id: 3,
      title: "Cost 3",
      body: "Aorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eu iaculis aliquet, nisl nisl aliquet nisl, eu iaculis nisl nisl euawawdawdawdawdawdawdawdawd",
    },
  ]);

  const [selectedSort, setSelectedSort] = useState<sort>("title");

  const createPost = (newPost: IPost) => {
    setPosts([...posts, newPost]);
  };

  const deletePost = (id: number) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const sortPosts = (sort: sort) => {
    console.log({ sort });
    setSelectedSort(sort);
    setPosts(posts.sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  return (
    <>
      <PostForm create={createPost} />
      <hr style={{ margin: "15px" }} />
      <MySelect
        selectedSort={selectedSort}
        changeSort={sortPosts}
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
