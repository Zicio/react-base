import { useMemo, useState } from "react";
import PostsList from "../components/postsList/PostsList";
import PostForm from "../components/postForm/PostForm";
import { IFilter, IPost } from "../types";
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
    sort: null,
    query: "",
  });

  const createPost = (newPost: IPost) => {
    setPosts([...posts, newPost]);
  };

  const deletePost = (id: number) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return posts.sort(
        (a, b) => a[filter.sort!].localeCompare(b[filter.sort!]) //TODO разобраться с типами
      );
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
      <PostForm create={createPost} />
      <hr style={{ margin: "15px" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {!sortedAndSearchedPosts.length ? (
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
