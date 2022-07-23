import React from "react";
import { Hero } from "./../components/Hero";
import { Features } from "./../components/Features";
import { Statistic } from "./../components/Statistic";
import { Helmet } from "react-helmet";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const Home = (props) => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Navbar />
      <Hero title="Welcome to" />
      <Features />
      <Statistic />
      <Footer />
    </>
  );
};
