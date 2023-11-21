import { useState } from "react";
import PostsList from "../components/postsList/PostsList";
import PostForm from "../components/postForm/PostForm";
import { IFilter, IPost } from "../types";
import MyModal from "../components/UI/modal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import { usePosts } from "../hooks/usePosts";
import PostFilter from "../components/PostFilter/postFilter";

const MainPage = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Bost 1",
      body: "Corem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eu iaculis aliquet, nisl nisl aliquet nisl, eu iaculis nisl nisl euismod nisl.",
    },
    {
      id: 2,
      title: "Dost 2",
      body: "Borem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eu iaculis aliquet, nisl nisl aliquet nisl, eu iaculis nisl nisl euism",
    },
    {
      id: 3,
      title: "Cost 3",
      body: "Aorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eu iaculis aliquet, nisl nisl aliquet nisl, eu iaculis nisl nisl euawawdawdawdawdawdawdawdawd",
    },
  ]);

  const [filter, setFilter] = useState<IFilter>({
    sort: "",
    query: "",
  });

  const [isModal, setIsModal] = useState<boolean>(false);

  const sortedAndSearchedPosts = usePosts({ posts, ...filter });

  const createPost = (newPost: IPost) => {
    setPosts([...posts, newPost]);
    setIsModal(false);
  };

  const deletePost = (id: number) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <>
      <MyButton type="button" onClick={() => setIsModal(true)}>
        Создать пост
      </MyButton>
      <MyModal visible={isModal} setVisible={setIsModal}>
        <PostForm create={createPost} />
      </MyModal>
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostsList
        posts={sortedAndSearchedPosts}
        remove={deletePost}
        title="Список постов"
      />
    </>
  );
};
export default MainPage;
