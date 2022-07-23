import React from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import PageTitle from "./PageTitle";

export const Hero = (props) => {
  return (
    <>
      <div className="bg-heropic h-screen bg-cover flex justify-center items-center flex-col">
        <h1>
          <PageTitle title={props.title} />
        </h1>
        <img src="/logohero.png" className="w-1/3 pb-10" alt="" />
        <Link to="/login">
          <Button text="Masuk" />
        </Link>
      </div>
    </>
  );
};
