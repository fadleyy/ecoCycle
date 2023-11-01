import React from "react";
import CardBlog from "./CardBlog";

const SectionBlog = () => {
  return (
    <section
      className="w-full h-full md:px-[6rem] px-[1rem] max-sm:mt-[8rem]"
      id="blog"
    >
      <div className="w-full py-5 border-b-2 border-primary-main mb-5">
        <h1 className="text-5xl font-bold max-sm:text-center">Blog</h1>
      </div>
      <div className="flex flex-wrap max-sm:flex-col md:justify-between justify-center max-sm:items-center gap-8">
        <CardBlog />
        <CardBlog />
        <CardBlog />
        <CardBlog />
        <CardBlog />
        <CardBlog />
      </div>
    </section>
  );
};

export default SectionBlog;
