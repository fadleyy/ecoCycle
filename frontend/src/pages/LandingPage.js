import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import React from "react";
import SectionCard from "../components/Section-card.jsx";
import SectionBlog from "../components/SectionBlog.jsx";
import SectionTeam from "../components/SectionTeam.jsx";

const LandingPage = () => {
  return (
    <>
      <div className="bg-gradient-to-t">
        <Navbar home={"home"} />
        <Hero />
        <SectionCard />
        <SectionBlog />
        <SectionTeam />
        <footer id="contact" className=" relative md:h-[300px] h-[450px] flex flex-col gap- md:px-[6rem] px-[2rem] mt-10 bg-secondary-main py-1 text-white ">
          <div className="flex md:justify-between max-sm:flex-col justify-center items-center text-center w-full">
            <div className="text-2xl font-extrabold">EcoCycle</div>
            <div className="container">
              <div className="flex max-sm:flex-col md:gap-5 gap-2 my-1  ">
                <ul className=" max-sm:text-sm">
                  <li>
                    <a href="#feature" className="max-sm:text-sm">Our Features</a>
                  </li>
                  <li>
                    <a href="#feature" className="max-sm:text-sm">Our Teams</a>
                  </li>
                  <li>
                    <a href="#feature" className="max-sm:text-sm">Blog</a>
                  </li>
                  <li>
                    <a href="#feature" className="max-sm:text-sm">Marketplace</a>
                  </li>
                  <li>
                    <a href="#feature" className="max-sm:text-sm">Coint</a>
                  </li>
                </ul>
                <div>
                  <ul>
                    <li>
                      <a href="" className="max-sm:text-sm">Jemput Sampah </a>
                    </li>
                    <li>
                      <a href="" className="max-sm:text-sm">Tentang Kami</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:gap-4 gap-2">
              <div>
                <h2 className="md:mb-2 mb-1">PT.Ecocycle Indonesia</h2>
                <p className="w-[235px] font-normal text-xs ">
                  Jl. Abdul Muis No.44, RT.1/RW.8, Petojo Sel., Kecamatan Gambir,
                  Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10160
                </p>
              </div>
              <div>
                <p className="text-sm">EcoCycle@bersih.co</p>
                <p className="text-sm">+62 895-6045-40705</p>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-50">
            <h1 className="font-normal text-sm mt-3">©2020 Ecocycle is trademark of PT Ecocycle Indonesia. Registered in the Directorate General of Intellectual Property of the Republic of Indonesia</h1>
          </div>
        </footer >
      </div >
    </>
  );
};

export default LandingPage;
