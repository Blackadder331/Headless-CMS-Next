// "use client";
import React from "react";
import Image from "next/image";

const index = () => {
  return (
    <div>
      <h1>Title</h1>

      <Image
        src="/assets/house.jpg"
        /* layout="responsive" */ width="400"
        height="500"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

export default index;
