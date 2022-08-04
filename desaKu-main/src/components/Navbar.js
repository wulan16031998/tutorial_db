import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import {useAuth} from "../hooks/useAuth";

export const Navbar = () => {
  const {logout} = useAuth();
  return (
    <nav className="flex justify-between items-center bg-[#FDFDFD] p-4 z-10">
      <Link to="/" className="pl-12">
        <img src="logo.png" alt="" className="w-6" />
      </Link>
      <div className="pr-12">
        <Link to="/about" className="p-4 ">
          Tentang Kami
        </Link>
        <Link to="/dashboard" className="p-4">
          Data Warga
        </Link>
        <Link to="/login">
          <Button onClick={logout} text="Keluar" />
        </Link>
      </div>
    </nav>
  );
};
