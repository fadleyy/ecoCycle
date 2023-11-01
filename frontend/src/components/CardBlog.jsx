import React from "react";
import { useNavigate } from "react-router-dom";

const CardBlog = () => {
  const modals = () => {
    return <div className="w-[300px] h-[300px] bg-blue-400 absolute"></div>;
  };

  const history = useNavigate();
  function handleBlog() {
    alert("hallo");
    return <modals />;
  }

  return (
    <div className="w-[300px] h-[306px] relative overflow-hidden rounded-2xl">
      <img
        src={"/blog.png"}
        width={300}
        height={300}
        className="absolute hover:scale-110 transition-all duration-500 ease-linear"
        onClick={handleBlog}
      />
      <div className="absolute bottom-0 text-white p-3 font-semibold">
        <h3>Masa Darurat Sampah Kota Bandung Akan Diperpanjang</h3>
        <p>25 October 2023</p>
      </div>
    </div>
  );
};

export default CardBlog;
