import axios from "../api/axios";
import React, {  useState } from "react";
import { Button } from "./Button";
import {useAuth }from '../hooks/useAuth';
import { useNavigate } from "react-router-dom";


const TableWarga = (req) => {
  const {warga} =  useAuth();
  const navigate = useNavigate();
  const [data, setData]= useState([]);
  const [errMsg, setErrMsg]= useState([]);

  if(!warga) {
    navigate('/login')
  }
    const Warga_URL = '/warga'

    const loadData = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.get(Warga_URL, {
          headers:{
            'Content-Type':'application/json',
            'Authorization':'Bearer' + warga.token
      }})
    
      if(response?.data) {
        setData(response.data.result)
    }
      } catch (e) {
        if(!e?.response) {
          setErrMsg('nothing response from server')
        } else if (e?.response?.data?.message) {
          setErrMsg(e?.response?.data?.message)
          }
      }
    }
  return (
    <>
    { errMsg ? (
      <span>{errMsg}</span>
    ): ''}
   
      <table className="table-auto w-9/12">
        <thead className="bg-gray-50 border-b-2 border-gray-200">
          <tr>
          <th className="p-3 font-semibold text-left">Nama</th>
          <th className="p-3 font-semibold text-left">Contact</th>
          <th className="p-3 font-semibold text-left">AlamatKtp</th>
          <th className="p-3 font-semibold text-left">Pekerjaan</th>
          <th className="p-3 font-semibold text-left">Action</th>
          </tr>
        </thead>
        <tbody onLoad={loadData}>
          { data ? data.map((p)=> {
          return (
            <tr>
              <td className="p-3 border-r-2 border-b-2">{p.nama}</td>
              <td className="p-3 border-r-2 border-b-2">{p.contact}</td>
              <td className="p-3 border-r-2 border-b-2">{p.alamatKtp}</td>
              <td className="p-3 border-r-2 border-b-2">{p.pekerjaan}</td>
              <td className="p-3 border-r-2 border-b-2 flex gap-1">
                <Button text="Update" />
                <Button text="Delete" />
              </td> 
            </tr>
          )
          }): ''
        }
      </tbody>
    </table>
    </>
  );
};

export default TableWarga;
