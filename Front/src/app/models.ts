export interface AuthToken{
  token: string;
}
export interface Category{
  id: number;
  name: string;
  description: string;
}
export interface User {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
}

export interface Citata{
  id: number;
  content: string;
  author: string;
  year: Date;
  category: Category;
}

export interface Comment{
  id:number;
  text: string;
  user: User;
  date: Date;
  citata: Citata;
}
