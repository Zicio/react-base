export interface IPost {
  id: number;
  title: string;
  body: string;
}

export interface IOption {
  name: string;
  value: string;
}

export interface IFilter {
  sort: Exclude<keyof IPost, "id"> | "";
  query: string;
}

export interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
