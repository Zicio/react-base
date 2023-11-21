import { IFilter, IPost } from "../types";
import { useMemo } from "react";

interface IUseSortedPostsProps {
  posts: IPost[];
  sort: IFilter["sort"];
}

interface IUsePostsProps extends IUseSortedPostsProps {
  query: string;
}

export const useSortedPosts = ({
  posts,
  sort,
}: IUseSortedPostsProps): IPost[] => {
  const sortedPosts = useMemo(() => {
    if (sort) {
      return posts.sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return posts;
  }, [sort, posts]);
  return sortedPosts;
};

export const usePosts = ({ posts, sort, query }: IUsePostsProps) => {
  const sortedPosts = useSortedPosts({ posts, sort });
  const sortedAndSearchedPosts = useMemo(() => {
    if (query) {
      return sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(query.toLowerCase())
      );
    }
    return sortedPosts;
  }, [query, sortedPosts]);
  return sortedAndSearchedPosts;
};
