import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "./Button";

const Table = (req) => {
  const [listWarga, setListWarga]= useState([]);
  const token = localStorage.getItem('token');
  
    const getListWarga = async () => {
      try {
        const data = await axios.get('https://jsonplaceholder.typicode.com/users' , {
          headers: {
            'authorization':'Bearer '+ token,
          } })
          setListWarga(data)
      
      } 
      catch(err) {
        console.log(err);
      }}

    useEffect(()=> {
      getListWarga();
    },)
    console.log(listWarga);
    
    

// const Table = (req) => {
//   const [listWarga, setListWarga]= useState([]);
//   const token = localStorage.getItem('token');
  
//     const getListWarga = () => {
//       fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(data => console.log(data));
//     } 

//     useEffect(()=> {
//       setListWarga(getListWarga());
//     },)

  return (
    <>
      <table className="table-auto w-9/12">
        <thead className="bg-gray-50 border-b-2 border-gray-200">
          <tr>
            <th className="p-3 font-semibold text-left">Name</th>
            <th className="p-3 font-semibold text-left">Contact</th>
            <th className="p-3 font-semibold text-left">Address</th>
            <th className="p-3 font-semibold text-left">Job</th>
            <th className="p-3 font-semibold text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {listWarga.map(listWarga => {
            return (
              <tr key={listWarga.id}>
              <td className="p-3 border-r-2 border-b-2">{listWarga.nama}</td>
              <td className="p-3 border-r-2 border-b-2">{listWarga.contact}</td>
              <td className="p-3 border-r-2 border-b-2">{listWarga.alamatKtp}</td>
              <td className="p-3 border-r-2 border-b-2">{listWarga.pekerjaan}</td>
              <td className="p-3 border-r-2 border-b-2 flex gap-1">
                <Button text="Update" />
                <Button text="Delete" />
              </td>
            </tr>
            )
          })}
        </tbody>
    {/*}
      <tr>
        <td className="p-3 border-r-2 border-b-2">Sukarno</td>
        <td className="p-3 border-r-2 border-b-2">0853535353</td>
        <td className="p-3 border-r-2 border-b-2">Jl Telindung No 20</td>
        <td className="p-3 border-r-2 border-b-2">Ketua RT</td>
        <td className="p-3 border-r-2 border-b-2 flex gap-1">
          <Button text="Update" />
          <Button text="Delete" />
        </td>
      </tr>
      <tr>
        <td className="p-3 border-r-2 border-b-2">Sukarno</td>
        <td className="p-3 border-r-2 border-b-2">0853535353</td>
        <td className="p-3 border-r-2 border-b-2">Jl Telindung No 20</td>
        <td className="p-3 border-r-2 border-b-2">Ketua RT</td>
        <td className="p-3 border-r-2 border-b-2 flex gap-1">
          <Button text="Update" />
          <Button text="Delete" />
        </td>
      </tr>
    </tbody>
          {*/}   
      </table>
    </>
  );
};

export default Table;
