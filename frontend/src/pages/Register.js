import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"

const Register = () => {
    const [nik, setNik] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confPassword, setConfPassword] = useState('')
    const [msg, setMsg] = useState('')
    const history = useNavigate()

    const register = async (e) => {
        e.preventDefault()
        try {
            await axios.post('http://localhost:5000/register', {
                nik: nik,
                name: name,
                email: email,
                password: password,
                confPassword: confPassword
            })
            history('/login')
        } catch (error) {
            setMsg(error.response.data.msg);
        }
    }
    return (
        <>
            <div className="text-center mx-auto flex justify-center items-center">
                <a href="/" className="text-5xl font-bold text-primary-main mt-2">
                    EcoCycle
                </a>
            </div>
            <div className="flex justify-center items-center h-screen relative">
                <img src="/acsen-2.png" alt="acsend" width={200} height={200} className="absolute bottom-0 left-0" />
                <img src="/acsen-3.png" alt="acsend" width={250} height={250} className="absolute  right-0 top-0 " />
                <form
                    className="w-[600px] h-max p-4 bg-primary-surface rounded-xl flex items-center flex-col  gap-4 relative mt-10"
                    onSubmit={register}
                >
                    <div className="md:mb-10 md:text-5xl text-3xl font-bold text-primary-main ">Register</div>
                    <label className="left-10 top-20 md:font-semibold text-sm text-[#7F7F7F] md:absolute max-sm:text-sm">
                        Silahkan daftar untuk bergabung dengan kita
                    </label>
                    <div className=" w-full flex items-center rounded-xl border-2 border-primary-border ">
                        <input
                            type="text"
                            className="border-none md:py-4 py-2 pl-8 w-full text-secondary-main md:font-semibold text-sm outline-none focus:ring-2 focus:ring-inset focus:ring-primary-main rounded-xl focus:rounded-xl transition-all ease-out duration-300"
                            placeholder="NIK"
                            value={nik} onChange={(e) => setNik(e.target.value)}
                        />
                    </div>

                    <div className=" w-full flex items-center rounded-xl border-2 border-primary-border ">
                        <input
                            type="text"
                            className=" border-none md:py-4 py-2 pl-8 w-full text-secondary-main md:font-semibold text-sm outline-none focus:ring-2 focus:ring-inset focus:ring-primary-main rounded-xl focus:rounded-xl transition-all ease-out duration-300"
                            placeholder="UserName"
                            value={name} onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className=" w-full flex items-center rounded-xl border-2 border-primary-border ">
                        <input
                            type="email"
                            className=" border-none md:py-4 py-2 pl-8 w-full text-secondary-main md:font-semibold text-sm outline-none focus:ring-2 focus:ring-inset focus:ring-primary-main rounded-xl focus:rounded-xl transition-all ease-out duration-300"
                            placeholder="e-mail"
                            value={email} onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className=" w-full flex items-center rounded-xl border-2 border-primary-border ">
                        <input
                            type="password"
                            className=" border-none md:py-4 py-2 pl-8 w-full text-secondary-main md:font-semibold text-sm outline-none focus:ring-2 focus:ring-inset focus:ring-primary-main rounded-xl focus:rounded-xl transition-all ease-out duration-300"
                            placeholder="password"
                            value={password} onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className=" w-full flex items-center rounded-xl border-2 border-primary-border ">
                        <input
                            type="password"
                            className=" border-none md:py-4 py-2 pl-8 w-full text-secondary-main md:font-semibold text-sm outline-none focus:ring-2 focus:ring-inset focus:ring-primary-main rounded-xl focus:rounded-xl transition-all ease-out duration-300"
                            placeholder="Confirm Password"
                            value={confPassword} onChange={(e) => setConfPassword(e.target.value)}
                        />
                    </div>

                    <div className="w-full">
                        <p className='text-center text-red-600 font-semibold'>{msg} </p>
                        <button
                            className=" text-white font-bold w-full md:py-4 py-2 bg-primary-main rounded-xl hover:bg-primary-hover transition-all duration-500 ease-in-out"
                        // onClick={() => history('/')} 
                        >Register</button>
                    </div>
                </form>
            </div>
        </>
    )
}


export default Register