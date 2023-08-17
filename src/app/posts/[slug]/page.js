// "use client";
import React from "react";
import Image from "next/image";

const index = () => {
  return (
    <div>
      <h1>Title</h1>
      <div className="clipPath">
        <svg xmlns="http://www.w3.org/2000/svg" style={{ width: '0', height: '0' }}>
          <defs>
            <clipPath id="clipPath">
              <path d="m337.5,45h-99c-12.43,0-22.5-10.07-22.5-22.5h0c0-12.43-10.07-22.5-22.5-22.5H22.5C10.07,0,0,10.07,0,22.5v126c0,12.43,10.07,22.5,22.5,22.5s22.5,10.07,22.5,22.5h0c0,12.43,10.07,22.5,22.5,22.5h270c12.43,0,22.5-10.07,22.5-22.5v-126c0-12.43-10.07-22.5-22.5-22.5Z" />
            </clipPath>
          </defs>
        </svg>

        <div className="clipped">
          <Image
            src="/assets/house.jpg"
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
