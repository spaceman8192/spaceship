import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import { getPosts } from "@/script/utils";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>SpaceShip</title>
        <meta
          name="description"
          content="Spaceman Front-end Development Logbook"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/startup.png" />
      </Head>
      <div>
        <div>
          <h1>Home</h1>
          {posts.map((post) => (
            <p key={post.slug}>{post.data.title}</p>
          ))}
        </div>
      </div>
      {/* <main className={styles.main}>
        <Header />
        <div>
          <h1>Main</h1>
        </div>
      </main> */}
    </>
  );
}
