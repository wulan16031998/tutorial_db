import React from "react";
import { Helmet } from "react-helmet";
import { Button } from "./../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from '../api/axios'



export const Login = () => {
  const [nama, setNama]=useState('');
  const [password, setPassword]=useState('');
  const [errMsg,setErrMsg]= useState('');
  const [success,setSuccess]= useState('');
  const navigate = useNavigate();
 
  const LOGIN_URL ='/login'

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(LOGIN_URL, JSON.stringify({
        nama:nama,
        password:password
      }), {
        headers: {'Content-Type':'application/json'}
      })

      if (response?.data) {
        setSuccess(true);
      }
    } catch (error) {
      if(!e?.response) {
        setErrMsg('tidak ada respon dari server')
      } else if (e?.response?.data?.message) {
        setErrMsg(e?.response?.data?.message)
        }
      }
    }




  //   Axios.post('http://localhost:5000/auth/login',{
  //             nama : nama,
  //             password: password,
              
  //  }, {
  //      headers: {
  //        'Content-Type': 'application/json',
  //        'Authorization': 'Bearer jwtToken',
  //        'Accept':'application/json',
  //      } 
  //    })
  //  .then((res) => {
  //   navigate('/');
  //   // if(res)// if (200) simpan token  ke cookies
  //    console.log("server response:",res);
   
  //  })
  //  .catch((err) =>{
  //  console.log("Server responded with error", err);
  //  })

  
  return (
    <>
      {success ? (
        <span>Berhasil login</span>
      ): ''}
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="grid grid-cols-2 ">
        <div className="bg-loginpic h-screen">
          <Link to="/" className="p-4 text-white text-3xl bg-[#29b2ff] ">
            ←
          </Link>
        </div>
        <div className="m-auto">
          <h1 className="text-4xl pb-5 font-bold text-[#29b2ff] text-center">Masuk</h1>
          <form  onSubmit={handleSubmit} method="post" className="grid grid-rows-3 gap-4 w-80 h-70">
          <input type="text" name="name" className="border-solid border-2 radius p-2 rounded-md" placeholder="Username" value={nama} onChange={(e) => {setNama(e.target.value);}}/>
          <input type="password" name="name" className="border-solid border-2 radius p-2 rounded-md" placeholder="password" value={password} onChange={(e) => {setPassword(e.target.value);}}/>
            <a href="https://www.google.com" className="text-right text-sm">
              Lupa Password?
            </a>
            <Button text="Masuk" onClick={Login} />
            <Link to='/register' >
              <Button text='Pendaftaran akun' className='buttonRegister' />
            </Link>
          </form>
        </div>
      </div>
    </>
  );
      }
