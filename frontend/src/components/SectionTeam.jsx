import React from "react";
import CardTeam from "./CardTeam";

const SectionTeam = () => {
  return (
    <section id="team" className=" h-max mt-32 md:px-[6rem] px-[1rem]">
      <div className="text-center text-5xl font-bold border-b-2 border-b-primary-main pb-2">
        Our Team
      </div>
      <div className="container mt-8 flex max-sm:flex-col max-sm:items-center md:justify-between md:flex-wrap gap-8">
        <CardTeam name="Muhammad Iqbal" role="Hacker" source="Iqbal.png" />
        <CardTeam name="Muhammad Fadli" role="Hacker" source="fadli.png" />
        <CardTeam name="Ramadhoni Fitra" role="Hacker" source="rama.png" />
        <CardTeam name="Rizki Ramadhon" role="Hustler" source="ikiw.png" />
        <CardTeam name="Iqbal Maulana" role="Hipster" source="bale.png" />
        <CardTeam name="Revani Putri" role="Hustler" source="vani.png" />
      </div>
    </section>
  );
};

export default SectionTeam;
