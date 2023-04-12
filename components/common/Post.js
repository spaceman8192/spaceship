import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { getStaticProps } from "@/pages/bo/posts";
import { useState, useEffect } from "react";

const Post = ({ postInfo, tempInfo }) => {
  console.log(postInfo);
  const [source, setSource] = useState({});

  // const parseContent = async () => {
  //   const mdxSource = await serialize(source);
  //   return setSource(mdxSource);
  // };

  useEffect(() => {
    async function test() {
      console.log("useCallback");
      const mdxSource = await serialize(postInfo.content);
      console.log(mdxSource);
      setSource(mdxSource);
    }
    test();
  }, []);

  return (
    <>
      <h1>{postInfo.data.title}</h1>
      {postInfo.content}
      {source && <MDXRemote {...source} />}
    </>
  );
};

export default Post;
