import React, { useEffect, useState } from "react";
import NavPageUser from "../components/NavPageUser";
import CardPageUser from "../components/CardPageUser";
import axios from "axios";
import { jwtDecode as jwt } from "jwt-decode"
import { useNavigate } from "react-router-dom";
const PageUser = () => {
  const [name, setName] = useState('')
  const [token, setToken] = useState('')
  const [expired, setExpired] = useState('')
  const history = useNavigate()

  useEffect(() => {
    refreshToken()
  }, [])

  const refreshToken = async () => {
    try {
      const response = await axios('http://localhost:5000/token')
      setToken(response.data.accessToken)
      const decoded = jwt(response.data.accessToken)
      setName(decoded.name);
      setExpired(decoded.exp)
    } catch (error) {
      if (error.response) {
        history('/register')
      }
    }
  }

  const axiosJWT = axios.create()

  axiosJWT.interceptors.request.use(async (config) => {
    const currentDate = new Date()
    if (expired * 1000 < currentDate.getTime()) {
      const response = await axios.get('http://localhost:5000/token')
      config.headers.Authorization = `bearer ${response.data.accessToken}`
      setToken(response.data.accessToken)
      const decoded = jwt(response.data.accessToken)
      setName(decoded.name);
      setExpired(decoded.exp)
    }
    return config
  }, (error) => {
    return Promise.reject(error)
  })

  const getUsers = async () => {
    const response = await axiosJWT.get('http://localhost:5000/users', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    console.log(response.data)
  }


  return (
    <>
      <NavPageUser />
      <div className="w-full mt-8 ">
        <button
          className="bg-secondary-main p-2 text-white font-bold rounded-xl"
          onClick={getUsers}
        >getUsers</button>
      </div>
      <section className="px-[6rem]  w-full h-screen ">
        <div className=" w-full h-[251px] flex justify-between  bg-primary-main/20 my-16 rounded-xl shadow-xl relative " >
          <div className="p-[1rem]">
            <h1 className="text-[32px] font-bold">Halo, Selamat Datang {name} <br />Di Ecocycle</h1>
            <p className="text-[18px] text-[#7F7F7F] font-semibold mt-4 ">Sudah siap buang sampah hari Ini?</p>
          </div>
          <img src="/page-user.png" alt="" className="absolute right-5 -bottom-[4.3rem]" />
        </div>
        <h1 className="mx-auto text-[32px] font-bold border-b-4 border-primary-main w-fit mb-4">Pilih Bagian Ini</h1>
        <div className="w-full h-[250px] flex justify-between gap-3 bg-primary-main/20 rounded-xl p-[1rem]">
          <CardPageUser source="trash-2" />
          <CardPageUser source="Market" />
          <CardPageUser source="coin" />
          <CardPageUser source="notebook" />
        </div>
        <footer className="w-full py-10 text-center">
          <h3 className="">©Ecocycle 2023. Hak Cipta Dilindungi oleh Undang-undang.</h3>
          <h3 className="text-primary-main">Powered by Ecocycle</h3>
        </footer>
      </section>
    </>
  );
};

export default PageUser;
