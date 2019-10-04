interface Label {
  id: number;
  node_id: string;
  url: string;
  name: string;
  description: string;
  color: string;
  default: boolean;
}

interface User {
  id: number;
  node_id: string;
  html_url: string;
  login: string;
  avatar_url: string;
}

export interface Issue {
  id: number;
  number: number;
  node_id: string;
  url: string;
  html_url: string;
  title: string;
  body: string;
  created_at: string;
  labels: Label[];
  user: User;
  state: string;
}
