// "use client";
import React from "react";
import Image from "next/image";

const index = () => {
  return (
    <div>
      <h1>Title</h1>
      <div className="clipPath">
  <svg viewBox="0 0 675 90">
    <defs>
      <clipPath id="clipPath">
        <path d="m675,90h-198c-24.86,0-45-20.14-45-45h0c0-24.86-20.14-45-45-45H45C20.14,0,0,20.14,0,45v252c0,24.86,20.14,45,45,45s45,20.14,45,45h0c0,24.86,20.14,45,45,45h540c24.86,0,45-20.14,45-45v-252c0-24.86-20.14-45-45-45Z" />
      </clipPath>
    </defs>
  </svg>
  <div className="clipped">
  <Image src="/assets/house.jpg" width={350} height={250} alt="" style={{ objectFit: 'cover' }} />
  </div>
</div>


      <div className="clipped"></div>
    </div>
  );
};

export default index;
