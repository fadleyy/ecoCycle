import React from "react";

const CardFitur = (props) => {
  const { source, title } = props;
  const text =
    " Lorem ipsum dolor sit amet consectetur. Sed aliquet risus turpis nibh eleifend elementum pulvinar sed. ->";
  return (
    <div className="md:w-[442px] w-[300px]  h-[240px] flex flex-col rounded-xl bg-secondary-main px-4 py-2">
      <div className="flex justify-between  items-center w-full h-[90px] relative">
        <img src={`/svg/${source}`} width={80} height={80} />
        <div className="w-10 h-10 rounded-full bg-white absolute right-0 top-2"></div>
      </div>
      <h3 className="text-xl font-extrabold text-white tracking-wide my-3">
        {title}
      </h3>
      <p className="text-white leading-tight">{text}</p>
    </div>
  );
};

export default CardFitur;
