import React from "react";

const CardTeam = (props) => {
  const { name, source, role } = props;
  return (
    <div className="w-[276px] h-[300px] bg-white items-center px-[10px] pt-[15px] pb-10 flex flex-col gap-3 relative rounded-xl overflow-hidden shadow-xl">
      <img src={`/${source}`} alt={source} className="mx-auto" />
      <h4>{name}</h4>
      <h3>{role}</h3>
      <div className=" w-[276px] py-4 absolute bg-secondary-main bottom-0 flex justify-between items-center px-12 ">
        <img src="svg/brand-instagram.svg" alt="Instagram" className="" oncl />
        <img
          src="svg/brand-linkedin.svg"
          alt="Linkedin"
          className="group-[isLinked]:bg-blue-300"
        />
        <img
          src="svg/brand-facebook.svg"
          alt="Facebook"
          className="group-[facebook]:bg-blue-300"
        />
      </div>
    </div>
  );
};

export default CardTeam;
