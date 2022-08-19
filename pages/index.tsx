import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Categories, PostCard, PostWidget } from "../components/index";
import { Post } from "../models";
import { getPosts } from "../services";

// const posts: Post[] = [
//   {
//     title: "React Testing",
//     excerpt: "React Testing is a great way to test your React components",
//   },
//   {
//     title: "React Testing with Tailwind",
//     excerpt:
//       "React Testing is a great way to test your React components Tailwind",
//   },
// ];

const Home = ({ posts }: { posts: Post[] }) => {
  return (
    <>
      <div className="container mx-auto px-10 mb-8">
        <Head>
          <title>AT Blog App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 col-span-1">
            {posts &&
              posts.map((post, i) => (
                <PostCard key={post.title + i} post={post} />
              ))}
          </div>
          <div className="lg:col-span-4 col-span-1">
            <div className="lg:sticky relative top-8">
              <PostWidget categories={[]} slug={""} />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}

export default Home;
