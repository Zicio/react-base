import { useEffect, useRef, useState } from "react";
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
import { getPageCount } from "../utils/pages";
import Pagination from "../components/UI/pagination/Pagination";
import { useObserver } from "../hooks/useObserver";

const MainPage = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [filter, setFilter] = useState<IFilter>({
    sort: "",
    query: "",
  });
  const [isModal, setIsModal] = useState<boolean>(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const sortedAndSearchedPosts = usePosts({ posts, ...filter });

  const lastElement = useRef();

  const [fetchPosts, isPostsLoading, postsError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts([...posts, ...response.data]);
    const totalCount: number = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  });

  useObserver(lastElement, page < totalPages, isPostsLoading, () => {
    setPage(page + 1);
  });

  useEffect(() => {
    fetchPosts();
  }, [page]);

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
      <PostsList
        posts={sortedAndSearchedPosts}
        remove={deletePost}
        title="Список постов"
      />
      <div ref={lastElement} style={{ height: "20px", background: "red" }} />
      {isPostsLoading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <Loader />
        </div>
      )}
      <Pagination
        totalPages={totalPages}
        currentPage={page}
        setPage={setPage}
      />
    </>
  );
};
export default MainPage;
