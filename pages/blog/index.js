import Header from '@/components/Header';
import SideMenu from '@/components/common/SideMenu';

import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';

import styles from '@/styles/Blog.module.css';
const Blog = ({ source }) => {
  return (
    <div>
      <Header />
      <div>
        <h1>Blog</h1>
        <div className={styles.blog}>
          <SideMenu />
          <div className="wrapper">
            <div className={styles.content}>
              <MDXRemote {...source} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const source = `# My MDX page

  This is a list in markdown:
  

  - One
  - Two
  - Three`;

  const mdxSource = await serialize(source);
  return { props: { source: mdxSource } };
}

export default Blog;
