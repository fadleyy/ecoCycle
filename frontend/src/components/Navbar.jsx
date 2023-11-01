import React from "react";

const Navbar = (props) => {
  const { classLogin, position, home, logout, hiddenDas, index } = props;
  return (
    <>
      <nav
        className={`flex max-sm:flex-col items-center max-sm:gap-4 justify-between md:px-[6rem] md:py-8 py-4 ${position} ${index}`}
      >
        <div className="flex  justify-center items-center gap-4">
          <img
            src="/logo/Logo.png"
            alt="LOGO"
            width={80}
            height={80}
            className=""
          />
          <a href="/" className="text-3xl font-bold text-primary-main ">
            EcoCycle
          </a>
        </div>
        <div className={`flex gap-8 max-sm:hidden font-semibold ${classLogin}`}>
          <a href="#feature">Feature</a>
          <a href="#team">Team</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </div>
        <div className={`flex gap-8 ${classLogin} `}>
          <a
            href="/login"
            className="py-2 px-4 bg-primary-main cursor-pointer rounded-xl hover:bg-primary-hover transition-all duration-500 ease-in-out"
          >
            login
          </a>
          <a
            href="/register"
            className={`py-2 px-4 border-2 border-primary-hover cursor-pointer rounded-xl hover:bg-primary-hover transition-all duration-500 ease-in-out `}
          >
            Register
          </a>
        </div>
      </nav>
      <div className="flex bottom-0 fixed md:hidden justify-center py-4 bg-primary-main rounded-t-2xl w-full z-50">
        <div className="flex gap-8 mx-auto">
          <a href="/">Home</a>
          <a href="#team">Team</a>
          <a href="#feature">Feature</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
