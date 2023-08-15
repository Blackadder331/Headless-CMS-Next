import React from "react";
import Header from "./header";

const Wrapper = ({ children }) => {
  return (
    <div>
      <Header> </Header>
      {children}
    </div>
  );
};

export default Wrapper;
