export interface Blog {
  id: number;
  title: string;
  content: string;
  author: string;
}

export interface User {
  email: string | undefined;
  password: string | undefined;
  role: string;
}
