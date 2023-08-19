"use client";
import React, { useState, useEffect } from "react";
import parse from "html-react-parser";
import { graphCms } from "@/app/lib/graphCms";
import Style from "../../styles/singlepost.module.css";

const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

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
    <div className="container ">
      <div className={Style.singlePost}>
        <h1 className={Style.title}>{post.title}</h1>
        <small className={Style.date}>{formatDate(post.createdAt)}</small>{" "}
        <div className={Style.formatter}>{parse(post.content.html)}</div>
      </div>

      <div />
    </div>
  );
}

export default Page;
