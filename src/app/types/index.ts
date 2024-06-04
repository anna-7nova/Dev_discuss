export type UserData = {
  name: string | null;
  image: string | null;
};

export type PostData = {
  id: string;
  title: string;
  content: string;
  userId: string;
  topicId: string;
  createdAt: Date;
  updatedAt: Date;
  topic: { slug: string };
  user: UserData;
  _count: { comments: number };
};
