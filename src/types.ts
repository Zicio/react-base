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
  sort: Exclude<keyof IPost, "id"> | null;
  query: string;
}
