import React from "react";

export const Features = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <div className="desc self-center px-10">
          <h1 className="text-4xl pb-5 font-bold">
            Pencatatan <span className="text-[#29b2ff]">data</span> warga
          </h1>
          <p>
            Pendataan warga oleh kepala RT menjadi lebih mudah dengan{" "}
            <span className="font-bold">
              desa<span className="text-[#29b2ff]">Ku</span>
            </span>
            . Kepala RT tidak perlu lagi mendatangi warga door to door untuk sekedar melengkapi data warganya.
          </p>
        </div>
        <div className="img">
          <img src="/Banner 1.png" alt="" />
        </div>
        <div className="img">
          <img src="/Banner 2.png" alt="" />
        </div>
        <div className="desc self-center px-10">
          <h1 className="text-4xl pb-5 font-bold">
            Yuk bayar <span className="text-[#29b2ff]">kasmu!</span>
          </h1>
          <p>
            Pencatatan kas setiap warga{" "}
            <span className="font-bold">
              desa<span className="text-[#29b2ff]">Ku</span>
            </span>{" "}
            dilakukan dengan sistem, sehingga tidak ada kecurangan atau kehilangan tanggal dan data!
          </p>
        </div>
      </div>
    </>
  );
};
