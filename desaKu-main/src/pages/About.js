import React from "react";
import { Hero } from "../components/Hero";
import { Helmet } from "react-helmet";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const About = (props) => {
  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>

      <Navbar />

      <div className="px-24 pt-36">
        <h1 className="text-4xl pb-5 font-bold">
          Tentang <span className="text-[#29b2ff]">Kami</span>
        </h1>
        Website&nbsp;
        <span className="font-bold">
          desa<span className="text-[#29b2ff]">Ku </span>
        </span>
        yang diprakarsai oleh para gen Z dari RT 05, Kota Balikpapan, Kalimantan Timur. Tujuan dari website ini adalah untuk mempermudah pencatatan data, baik data warga dan data keuangan warga agar nantinya semua pencatatan dapat dilakukan
        lewat sistem, hal ini dimaksud untuk mengurangi penggunaan kertas serta fotocopy dokumen yang sebenarnya kurang efektif untuk dilakukan. Versi pertama dari website ini hanya mengakomodir pencatatan data keuangan dan data warga, dan
        akan dikembangkan di versi-versi berikutnya.
      </div>
      <Footer />
    </>
  );
};
