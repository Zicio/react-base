import { useState } from "react";
import MyInput from "../UI/Input/MyInput";
import MyButton from "../UI/button/MyButton";
import { IPost } from "../../types";

const PostForm: React.FC<{ create: (post: IPost) => void }> = ({ create }) => {
  const defaultNewPost = { title: "", body: "" };
  const [newPost, setNewPost] = useState(defaultNewPost);

  const addPost = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const post = {
      id: Date.now(),
      ...newPost,
    };
    create(post);
    setNewPost(defaultNewPost);
  };

  return (
    <form style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <MyInput
        type="text"
        placeholder="Название Поста"
        value={newPost.title}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNewPost({ ...newPost, title: e.target.value })
        }
      />
      <MyInput
        type="text"
        placeholder="Описание Поста"
        value={newPost.body}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNewPost({ ...newPost, body: e.target.value })
        }
      />
      <MyButton type="button" onClick={addPost}>
        Создать пост
      </MyButton>
    </form>
  );
};
export default PostForm;
