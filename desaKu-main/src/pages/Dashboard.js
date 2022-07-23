import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Helmet } from "react-helmet";
import { Link, Route, Routes } from "react-router-dom";
import Uang from "./Uang";
import Warga from "./Warga";
import { Axios } from "axios";
import { useEffect } from "react";

export const Dashboard = () => {
  

  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <Navbar />
      <div className="grid grid-flow-col gap-10 ">
        <div className="row border-r-2 border-netral h-screen pl-6 w-56">
          <h1 className="text-lg font-bold mb-9 text-primary">
            <Link to="/dashboard">Menu</Link>
          </h1>
          <div className="grid grid-rows-3 gap-2">
            <div className="submenu">
              <Link to="/dashboard">
                <img src="/dashboard active.png" alt="" className="inline-block m-1 mr-4" />
                Dashboard
              </Link>
            </div>

            <div className="submenu ">
              <Link to="warga" element={<Warga />}>
                <img src="/people non.png" alt="" className="inline-block m-1 mr-4" />
                Data Warga
              </Link>
            </div>

            <div className="submenu ">
              <Link to="uang" element={<Uang />}>
                <img src="/doc non.png" alt="" className="inline-block m-1 mr-4" />
                Data Keuangan
              </Link>
            </div>
          </div>
        </div>

        <div className="row-span-2 w-screen ">
          <h1 className="font-bold text-3xl mb-8">Selamat datang, nama</h1>
          <Routes>
            <Route path="warga" element={<Warga />} />
            <Route path="uang" element={<Uang />} />
          </Routes>
        </div>
      </div>
    </>
  );
};
