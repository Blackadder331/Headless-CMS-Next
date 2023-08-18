// "use client";
import React from "react";
import Image from "next/image";
import { graphCms } from "@/app/lib/graphCms";

const index = () => {
  return (
    <div>
      <div className="container">
        <h1>This is a single post</h1>
      </div>
      {/* <h1>Title</h1>
      <div>
        <div>
          <Image
            src="/assets/house.jpg"
            width={350}
            height={250}
            alt=""
            style={{ objectFit: "cover" }}
          />
        </div>
      </div> */}
    </div>
  );
};

export default index;

export async function getStaticPaths(params) {
  const { posts } = await graphCms.request(`
  {
    posts{
      slug
    }
  }
  `);
  const paths = posts.map(({ slug }) => ({ params: { slug } }));
  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const { post } = await graphCms.request(
    `
  query SinglePost($slug:String!){
    post(where:{slug:$slug}) {
      title
      createdAt
      content{
        html
      }
    }
  }
  `,
    { slug: params.slug }
  );

console.log("hello single post");

return {
  props: {
    post,
    revalidate: 10,
  },
};
}