import { useNavigate, useParams } from "react-router-dom";
import useFetching from "../hooks/useFetching";
import { PostService } from "../API/PostService";
import { IComment, IPost } from "../types";
import { useEffect, useState } from "react";
import Loader from "../components/UI/loader/Loader";

const PostIdPage = () => {
  const { id } = useParams();
  // const navigate = useNavigate();
  const [post, setPost] = useState<IPost | null>(null);
  const [comments, setComments] = useState<IComment[] | null>(null);
  const [fetchPostById, isLoading, error] = useFetching(async () => {
    if (id) {
      const response = await PostService.getById(id);
      setPost(response.data);
    }
  });

  const [fetchComments, isComLoading, comError] = useFetching(async () => {
    if (id) {
      const response = await PostService.getComments(id);
      setComments(response.data);
    }
  });

  useEffect(() => {
    fetchPostById(id);
    fetchComments(id);
  }, [id]);

  // if (error || comError) {
  //   navigate("/error");
  //   return;
  // }

  return (
    <>
      {isLoading ? (
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
        <>
          <h2>{post?.title}</h2>
          <p>{post?.body}</p>
          <h3 style={{ marginTop: "30px" }}>Комментарии</h3>
          {isComLoading ? (
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
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {comments?.map((comment) => {
                return (
                  <div key={comment.id}>
                    <h4>
                      {comment.name} {comment.email}
                    </h4>
                    <p>{comment.body}</p>
                  </div>
                );
              })}
            </div>
          )}
        </>
      )}
    </>
  );
};
export default PostIdPage;
