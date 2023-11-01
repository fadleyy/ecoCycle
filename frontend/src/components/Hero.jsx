import React from "react";

const Hero = () => {
  return (
    <section className="md:flex md:flex-row flex-col h-full md:justify-between justify-center items-center md:align-baseline max-sm:text-center md:px-[6rem] px-4">
      <div className="flex flex-col md:gap-3 gap-4">
        <img
          src="/hero-banner.png"
          width={400}
          height={400}
          className="max-sm:w-[200px] h-[200px] md:hidden mx-auto"
        />
        <h3 className="md:text-xl text-sm font-bold tracking-normal">
          Buang Sampah Tanpa Rugi Dengan
          <span className="text-[#A7D397]"> EcoCycle!</span>
        </h3>
        <h1 className="md:text-7xl text-2xl font-bold md:leading-[80px] leading-normal">
          Buang Sampah <br />
          Daur Ulang? <br />
          Di <span className="text-[#A7D397]">EcoCycle</span> Aja!
        </h1>
        <p className="md:w-[560px] md:my-2 max-sm:text-center font-medium md:text-md text-sm">
          ECOCYLE adalah aplikasi yang bertujuan untuk memfasilitasi dan
          mendorong praktik daur ulang, serta gaya hidup berkelanjutan. Aplikasi
          ini didesain untuk membantu pengguna berkontribusi dalam upaya
          pelestarian lingkungan alam dengan cara yang mudah dan efektif.
        </p>
        <div className="py-3 flex gap-3 items-center max-sm:text-center max-sm:justify-center">
          <a
            href="/Login/"
            className="py-3 px-4 border border-[#6C6C6C6C] text-slate-500 rounded-md hover:text-[#A7D397]"
          >
            Bergabung
          </a>
          <a
            href="/"
            className="py-3 px-4 bg-[#A7D397] text-white rounded-md hover:bg-[#53694B] transition-all duration-500"
          >
            Tentang Kami
          </a>
        </div>
      </div>
      <img
        src="/hero-banner.png"
        width={400}
        height={400}
        className="max-sm:w-[200px] max-sm:h-[200px] max-sm:hidden"
      />
    </section>
  );
};

export default Hero;
