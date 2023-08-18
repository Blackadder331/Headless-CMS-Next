import React from "react";
import Image from "next/image";
import Style from "../styles/post.module.css";
import Link from "next/link";

const Post = ({ post }) => {
  const { title, thumbnail, slug, categories } = post;
  return (
    <Link href={`/posts/${slug}`}>
      <div className={Style.post}>
        <Image src={thumbnail.url} layout="fill" />
        <div className={Style.overlay}>
          <h1>{title}</h1>
        </div>
        <div
          className={Style.badge}
          style={{ backgroundColor: categories[0].color.css }}
        >
          <h3>{categories[0].name}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Post;
