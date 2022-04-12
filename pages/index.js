import { FeaturedPosts } from "../sections/index";
import { PostCard, Categories, PostWidget, ConnectWidget } from "../components";
import { getPosts } from "../services";
import { useState } from "react/cjs/react.development";

export default function Home({ posts }) {
  const [hasMore, setHasMore] = useState(true);
  return (
    <div className="p-12 mx-auto px-20 mb-8">
      <FeaturedPosts />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
            <ConnectWidget />
          </div>
        </div>
      </div>
    </div>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
