"use client";
import React, { useState, useEffect } from "react";
import parse from 'html-react-parser'
import { graphCms } from "@/app/lib/graphCms";

function Page({ params: { slug } }) {
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const { post } = await graphCms.request(
        `
        query SinglePost($slug: String!) {
          post(where: { slug: $slug }) {
            title
            createdAt
            content {
              html
            }
          }
        }
        `,
        { slug }
      );
      setPost(post);
    }
    fetchData();
  }, [slug]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h1>{post.title}</h1>
      <small>{post.createdAt}</small>
      {parse(post.content.html)}
      <div />
    </div>
  );
}

export default Page;
