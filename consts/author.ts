export interface Author {
  name: string;
  email?: string;
  url?: string;
  github?: string;
  twitter?: string;
  funding?: string;
}

const authorList: Author[] = [
  {
    name: "Steven",
    github: "boojack",
    twitter: "stevenlgtm",
    funding: "https://ko-fi.com/stevenlgtm",
  },
];

export default authorList;
