"use client";
import React from "react";
import Post from "./components/post";
import { useFetch } from "next/app";
import { useState, useEffect } from "react";
import { graphCms } from "./lib/graphCms";

function Page() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { posts } = await graphCms.request(`
        {
          posts{
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
      `);
      setPosts(posts);
    }
    fetchData();
  }, []);

  return (
    <div className="container">
      <div>
        {posts.map((post) => (
          <Post key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Page;
