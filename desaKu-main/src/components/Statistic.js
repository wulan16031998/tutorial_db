import React from "react";

export const Statistic = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-center pt-36">
        Jumlah <span className="text-[#29b2ff]">warga</span> kami
      </h1>
      <div className="stat-wrap mt-16 bg-[#f5f5f5]">
        <div className="stats grid grid-cols-3 gap-4 text-center ">
          <div className="kk py-16">
            <img src="/icon-kk.png" className="mx-auto" alt="" />
            <h1 className="font-bold text-3xl text-[#29b2ff] pt-6">351</h1>
            <p className="text-[#7b7b7b] text-xl">Kartu Keluarga</p>
          </div>
          <div className="ppl  py-16">
            <img src="/icon-ppl.png" className="mx-auto" alt="" />
            <h1 className="font-bold text-3xl text-[#29b2ff] pt-6">1266</h1>
            <p className="text-[#7b7b7b] text-xl">Warga</p>
          </div>
          <div className="edu  py-16">
            <img src="/icon-edu.png" className="mx-auto" alt="" />
            <h1 className="font-bold text-3xl text-[#29b2ff] pt-6">564</h1>
            <p className="text-[#7b7b7b] text-xl">Warga minimal S1</p>
          </div>
        </div>
      </div>
    </>
  );
};
