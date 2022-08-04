import axios from "../api/axios";
import React, {  useState } from "react";
import { Button } from "./Button";
import {useAuth} from '../hooks/useAuth'
import { useNavigate } from "react-router-dom";

const TableKeuangan = (req) => {
  
    const {warga} =  useAuth();
    const KEUANGAN_URL = '/keuangan'
    const [errMsg, setErrMsg] = useState([])
    const [data, setData] = useState([])
    const navigate = useNavigate()

    if(!warga) {
      navigate('/login')
    }

    const loadData = async(e) => {
        e.preventDefault();
        try {
            const response = await axios.get(KEUANGAN_URL, {
                headers:{'Content-Type':'application/json'},
                'Authorization':'Bearer' + warga.token
            })

            if(response?.data) {
                setData(response.data.result)
            }
        } catch (e) {
            if(!e?.response) {
                setErrMsg('tidak ada respon apa apa dari server')
            } else if (!e?.response?.data?.message) {
                setErrMsg(!e?.response?.data?.message)
            }
        }
    }

  return (
    <>
    {errMsg ? (
        <span>{errMsg}</span>
      ) :'' }
      <table className="table-auto w-9/12">
        <thead className="bg-gray-50 border-b-2 border-gray-200">
          <tr>
            <th className="p-3 font-semibold text-left">nama</th>
            <th className="p-3 font-semibold text-left">Tgl bayar</th>
            <th className="p-3 font-semibold text-left">nominal</th>
          </tr>
        </thead>
        <tbody>
          {data ? data.map((p) => {
            return (
              <tr key={data.wargaid}>
              <td className="p-3 border-r-2 border-b-2">{p.nama}</td>
              <td className="p-3 border-r-2 border-b-2">{p.tglBayar}</td>
              <td className="p-3 border-r-2 border-b-2">{p.nominal}</td>
              <td className="p-3 border-r-2 border-b-2 flex gap-1">
                <Button onClick={loadData} text="Update" />
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

export default TableKeuangan;
