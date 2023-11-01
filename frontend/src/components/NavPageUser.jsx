import React from 'react'
import Dropdown from './DropDown'

const NavPageUser = () => {
    return (
        <nav className="w-full py-4 h-[80px] px-[6rem] bg-secondary-main flex justify-between">
            <div className="flex items-center gap-3">
                <img src="/logo/Logo.png" alt="" width={80} height={80} />
                <a href="/page" className="text-2xl font-semibold text-primary-main">
                    EcoCycle
                </a>
            </div>
            <Dropdown />
        </nav>
    )
}

export default NavPageUser