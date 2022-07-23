import React from "react";

export const Button = (props) => {
  return (
    <>
      <button className="bg-[#29b2ff] px-5 py-2 text-white rounded hover:bg-sky-700 transition duration-250">{props.text}</button>
    </>
  );
};
