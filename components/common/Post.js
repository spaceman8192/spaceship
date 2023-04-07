import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

const Post = ({ postInfo }) => {
  console.log(postInfo);
  const [source, setSource] = setState();

  const parseContent = async () => {
    const mdxSource = await serialize(source);
    return setSource(mdxSource);
  };

  return (
    <>
      <h1>{postInfo.data.title}</h1>
      {postInfo.content}
      <MDXRemote {...source} />
    </>
  );
};

export default Post;
