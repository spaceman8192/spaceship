import SideMenu from "@/components/common/SideMenu";
import Post from "@/components/common/Post";
import { getPosts } from "@/script/utils";
import { useState } from "react";

import styles from "@/styles/Blog.module.css";
const Blog = ({ posts }) => {
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
        <h1>Blog</h1>
        <div className={styles.blog}>
          <SideMenu posts={posts} onClickPost={onClickSideMenu} />
          <div className="wrapper">
            {isInit ? "init" : <Post postInfo={postData} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = () => {
  const posts = getPosts(1);
  return {
    props: {
      posts,
    },
  };
};

export default Blog;
