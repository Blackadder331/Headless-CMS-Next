import React from "react";
//function that adds two random nunmber
const AddTwoNumbers = () => {
  const num1 = Math.floor(Math.random() * 10);
  const num2 = Math.floor(Math.random() * 10);
  return num1 + num2;
};

const TestOne = (params) => {
  return (
    <div>
      <h1>Test1</h1>
      <p>Test1</p>
    </div>
  );
};
