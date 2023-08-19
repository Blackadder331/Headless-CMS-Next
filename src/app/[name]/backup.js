import React, { useState, useEffect } from "react";
import { graphCms } from "../lib/graphCms";
import Post from "../components/post";

function CategoryPage({ params }) {
  const [posts, setPosts] = useState(null);
  
  useEffect(() => {
    async function fetchData() {
      const { posts } = await graphCms.request(
        `
        query MyQuery ($name:String!) {
          posts(where: {categories_every: {name: $name}}){
            title
            slug
            thumbnail{
              url
            }
            categories{
              name
              color{
                css
              }
            }
          }
        }
        `,
        { name: params.name }
      );
      setPosts(posts);
    }
    fetchData();
  }, [params.name]);

  if (!posts) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="main">
        {posts.map((post) => (
          <Post key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
