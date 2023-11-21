import { useMemo, useState } from "react";
import PostsList from "../components/postsList/PostsList";
import PostForm from "../components/postForm/PostForm";
import { IFilter, IPost } from "../types";
import PostFilter from "../components/postFilter/PostFilter";
import MyModal from "../components/UI/modal/MyModal";
import MyButton from "../components/UI/button/MyButton";

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

  const createPost = (newPost: IPost) => {
    setPosts([...posts, newPost]);
    setIsModal(false);
  };

  const deletePost = (id: number) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return posts.sort((a, b) => a[filter.sort].localeCompare(b[filter.sort])); //TODO
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    if (filter.query) {
      return sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(filter.query.toLowerCase())
      );
    }
    return sortedPosts;
  }, [filter.query, sortedPosts]);

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
