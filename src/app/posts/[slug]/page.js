// "use client";
import React from "react";
import Image from "next/image";

const index = () => {
  return (
    <div>
      <h1>Title</h1>
      <div className="clipPath">
        <svg xmlns="http://www.w3.org/2000/svg" >
          <defs>
            <clipPath id="clipPath">
              <path d="m337.5,45h-99c-12.43,0-22.5-10.07-22.5-22.5h0c0-12.43-10.07-22.5-22.5-22.5H22.5C10.07,0,0,10.07,0,22.5v126c0,12.43,10.07,22.5,22.5,22.5s22.5,10.07,22.5,22.5h0c0,12.43,10.07,22.5,22.5,22.5h270c12.43,0,22.5-10.07,22.5-22.5v-126c0-12.43-10.07-22.5-22.5-22.5Z" />
            </clipPath>
          </defs>
          <rect x="0" y="0" width="360" height="216" clip-path="url(#clipPath)"/>
        </svg>

        <div style={{ clipPath: "url(#clipPath)" }}>
          <Image
            className="clipped"
            src="/assets/house.jpg"
            // width="400"
            // height="500"
            layout="fill"
            style={{ objectFit: "cover" }}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default index;
