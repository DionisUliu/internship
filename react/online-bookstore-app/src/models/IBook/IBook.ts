export interface IBook {
  _id?: string;
  key?: string;
  title: string;
  author: string;
  publication?: [{ date: string; _id: string }] | string[];
  publications: string[];
  genre: string;
  photos?: {};
  pages: number;
}
