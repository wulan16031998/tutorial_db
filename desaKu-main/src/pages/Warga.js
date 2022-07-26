import React from "react";
import Table from "../components/Table";
import RouteGuard from "../guard/RouteGuard";


const Warga = () => {
  return (
    <>
      <h1>Data Warga</h1>
      <RouteGuard>
      <Table />
      </RouteGuard> 
    
    </>
  );
};

export default Warga;
