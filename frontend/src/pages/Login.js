import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [msg, setMsg] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();

  const Auth = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/login", {
        name: name,
        password: password
      });
      history("/Page");
    } catch (error) {
      setMsg(error.response.data.msg);
    }
  };

  return (
    <>
      <div className="text-center flex pl-20 pt-8 fixed">
        <a href="/" className="text-5xl font-bold text-primary-main mt-2">
          EcoCycle
        </a>
      </div>
      <div className="flex justify-center items-center h-full relative">
        <img
          src="/acsen-2.png"
          alt="acsend"
          width={200}
          height={200}
          className="absolute bottom-0 md:left-0 left-5"
        />
        <img
          src="/acsen-3.png"
          alt="acsend"
          width={250}
          height={250}
          className="absolute  right-0 md:top-0 top-24 "
        />

        <form
          className="w-[600px] h-max p-4 bg-primary-surface rounded-xl flex items-center flex-col gap-8 relative mt-20"
          onSubmit={Auth}
        >
          <div className="mb-10 text-3xl font-bold text-primary-main">
            Login
          </div>
          <label className="left-10 top-20 font-semibold text-[#7F7F7F] absolute">
            Silahkan masuk ke akun yang terdaftar
          </label>
          <div className=" w-full flex items-cente rounded-xl border-2 border-primary-border ">
            <input
              type="text"
              className=" border-none md:py-4 py-2 pl-8 w-full text-secondary-main font-semibold outline-none focus:ring-2 focus:ring-inset focus:ring-primary-main rounded-xl focus:rounded-xl transition-all ease-out duration-300"
              placeholder="UserName"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className=" w-full flex items-cente rounded-xl border-2 border-primary-border ">
            <input
              type="password"
              className=" border-none md:py-4 py-2 pl-8 w-full text-secondary-main font-semibold outline-none focus:ring-2 focus:ring-inset focus:ring-primary-main rounded-xl focus:rounded-xl transition-all ease-out duration-300"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="w-full">
            <p className="text-red-500 text-center mb-2">{msg}</p>
            <button className="text-white font-bold w-full md:py-4 py-2 bg-primary-main rounded-xl hover:bg-primary-hover transition-all duration-500 ease-in-out">
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
