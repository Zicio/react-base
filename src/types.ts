export interface IPost {
  id: number;
  title: string;
  body: string;
}

export interface IOption {
  name: string;
  value: string;
}

export type sort = Exclude<keyof IPost, "id">;
