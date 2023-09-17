"use client";
import React from "react";
import Image from "next/image";
import Style from "../styles/post.module.css";
import Link from "next/link";

const Post = ({ post }) => {
  const { title, thumbnail, slug, categories } = post;
  return (
    <Link href={`/posts/${slug}`}>
      <div
        className={Style.post}
        // style={{ border: `1px solid ${categories[0].color.css}` }}
        style={{ border: `1px solid #4d4d4d` }}
      >
        <Image
          src={thumbnail.url}
          fill={true}
          sizes="(max-width: 768px) 100vw"
          priority={true}
          alt=""
        />
        <div className={Style.overlay}>
          <h1>{title}</h1>
        </div>
        <div className={Style.badge} style={{ backgroundColor: "#4d4d4d" }}>
          <h3>{categories[0].name}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Post;
