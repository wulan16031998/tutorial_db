import React from "react";

export const Footer = () => {
  return (
    <>
      <div className="footer bg-[#00141F] pb-4">
        <div className="mt-48 grid grid-rows-1 py-16 px-24">
          <img src="/logofooter.png" className="" alt="" />
        </div>
        <div className="grid grid-cols-7 px-24 text-[#A0ABC0] text-xs">
          <div className="col-span-3">Copyright 2022 Project HRSN</div>
          <div>
            <a href="https://www.google.com/"> Privacy Policy</a>
          </div>
          <div>
            <a href="https://www.google.com/">Terms & Condition</a>
          </div>
          <div>
            <a href="https://www.google.com/">Cookie Policy</a>
          </div>
          <div>
            <a href="https://www.google.com/">Contact</a>
          </div>
        </div>
      </div>
    </>
  );
};
