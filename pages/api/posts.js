import { getPosts } from "@/script/utils";

export default function handler(req, res) {
  const posts = getPosts(2);

  res.status(200).json(posts);
}
