type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
  };
}[];

const printAuthorInfo = (author: PostList[number]["author"]) => {
  console.log(`${author.name}-${author.id}`);
};

const post: PostList[number] = {
  title: "title",
  content: "content",
  author: {
    id: 1,
    name: "name",
  },
};
