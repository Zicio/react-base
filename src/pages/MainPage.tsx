import { useEffect, useState } from "react";
import PostsList from "../components/postsList/PostsList";
import PostForm from "../components/postForm/PostForm";
import { IFilter, IPost } from "../types";
import MyModal from "../components/UI/modal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import { usePosts } from "../hooks/usePosts";
import PostFilter from "../components/postFilter/PostFilter";
import { PostService } from "../API/PostService";
import Loader from "../components/UI/loader/Loader";
import useFetching from "../hooks/useFetching";

const MainPage = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  const [filter, setFilter] = useState<IFilter>({
    sort: "",
    query: "",
  });

  const [isModal, setIsModal] = useState<boolean>(false);

  const sortedAndSearchedPosts = usePosts({ posts, ...filter });

  const [fetchPosts, isPostsLoading, postsError] = useFetching(async () => {
    setPosts(await PostService.getAll());
  });

  useEffect(() => {
    fetchPosts();
  }, []);

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
      {postsError && <p>`${postsError as string}`</p>}
      {isPostsLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <Loader />
        </div>
      ) : (
        <PostsList
          posts={sortedAndSearchedPosts}
          remove={deletePost}
          title="Список постов"
        />
      )}
    </>
  );
};
export default MainPage;
