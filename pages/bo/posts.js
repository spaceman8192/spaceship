import SideMenu from "@/components/common/SideMenu";
import Post from "@/components/common/Post";
import { getPosts } from "@/script/utils";
import { useState } from "react";
import { serialize } from "next-mdx-remote/serialize";

import styles from "@/styles/Blog.module.css";


const Blog = ({ posts, mdxSource }) => {
  console.log(mdxSource);
  const [isInit, setIsInit] = useState(true);
  const [postData, setPostData] = useState({});
  const onClickSideMenu = (props) => {
    setIsInit(false);

    setPostData(
      posts.find((post) => {
        return post.data.id === props.data.id;
      })
    );
  };
  return (
    <div>
      <div>
        <h1>Posts</h1>
        <div className={styles.blog}>
          <SideMenu posts={posts} onClickPost={onClickSideMenu} />
          <div className="wrapper">
            {isInit ? (
              "init"
            ) : (
              <Post postInfo={postData} tempInfo={mdxSource} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const posts = getPosts(1);

  const mdxSource = await serialize(posts[0].content);
  console.log(mdxSource);
  return {
    props: {
      posts,
      mdxSource,
    },
  };
};

export default Blog;
