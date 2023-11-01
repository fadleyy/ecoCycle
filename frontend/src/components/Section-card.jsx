import React from "react";
import CardFitur from "./Card-feature";

const SecitionCard = () => {
  return (
    <section
      id="feature"
      className="h-screen w-full flex flex-col justify-center items-center "
    >
      <div className="w-full h-max bg-primary-main py-4 md:px-[6rem] px-[1rem]">
        <h1 className="text-center font-extrabold text-5xl text-secondary-main border-b-2 border-secondary-main pb-2">
          Our Features
        </h1>
        <div className="w-full md:h-[500px]  flex max-sm:flex-col max-sm:mt-4 gap-8 justify-between items-center ">
          <CardFitur source="trash (1).svg" title="Jemput Sampah" />
          <CardFitur source="shopping-cart.svg" title="Marketplace" />
          <CardFitur source="coin-1.svg" title="Point" />
        </div>
      </div>
    </section>
  );
};

export default SecitionCard;
