import React, { useState } from 'react';
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const Dropdown = () => {
    const history = useNavigate()
    const [isOpen, setIsOpen] = useState(false)
    const handleDropDown = () => {
        setIsOpen(!isOpen)
    }

    const logout = async () => {
        try {
            await axios.delete('http://localhost:5000/logout')
            history('/')
        } catch (error) {
            console.log(`logout error`)
        }
    }

    return (
        <div
            className="flex items-center gap-8 cursor-pointer relative z-50"
            onClick={handleDropDown}
        >
            {isOpen && (<div className="absolute top-14 right-0 py-2 w-[100px] bg-white border border-gray-300 rounded shadow-lg">
                <a href="/profile" className="block px-4 py-2 text-secondary-main hover:bg-primary-surface">Profile</a>
                <a href="/settings" className="block px-4 py-2 text-secondary-main hover:bg-primary-surface">Settings</a>
                <button className="block w-full py-2 text-secondary-main hover:bg-primary-surface" onClick={logout}>LogOut</button>
            </div>)}
            <img src="/Ellipse 2.png" alt="" width={50} height={50} />
            <img src="/Vector.svg" alt="Arrow" />
        </div>
    )
};

export default Dropdown;
