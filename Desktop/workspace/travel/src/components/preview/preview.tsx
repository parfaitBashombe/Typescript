import React from "react";
import Image from "next/image";
import tour from "../../../public/Paris/tour_paris.jpeg";
import borabora from "../../../public/bora bora/borabora.jpeg";
import glacier from "../../../public/glacier/glacier.jpeg";

const Preview = () => {
  return (
    <>
      <section
        id="rockets"
        className="p-6 my-12 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height"
      >
        <h2 className="text-4xl-font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
          Preview
        </h2>

        <ul className="list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8">
          <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 bg-secondaryColor py-6 px-2 rounded-3xl shadow-xl">
            <Image src={tour} alt="Eifeil tower" className="w-1/2 mb-6" />
            <h3 className="text-3xl text-center text-slate-900 dark:text-white">
              Paris
            </h3>
            <p className="hidden sm:block text-3xl text-center mt-2 text-white">
              Eifel Tower
            </p>
            <p className="sm:hidden text-2xl text-centr mt-2 text-white ">
              The soaring Eiffel Tower is one of the most visited landmarks in
              the world.
            </p>
          </li>

          <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 bg-secondaryColor py-6 px-2 rounded-3xl shadow-xl">
            <Image src={borabora} alt="Eifeil tower" className="w-1/2 mb-6" />
            <h3 className="text-3xl text-center text-slate-900 dark:text-white">
              French Polynesia island
            </h3>
            <p className="hidden sm:block text-3xl text-center mt-2 text-white">
              Bora Bora
            </p>
            <p className="sm:hidden text-2xl text-centr mt-2 text-white ">
              An aerial view of what awaits you in Bora Bora.
            </p>
          </li>

          <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 bg-secondaryColor py-6 px-2 rounded-3xl shadow-xl">
            <Image src={glacier} alt="Eifeil tower" className="w-1/2 mb-6" />
            <h3 className="text-3xl text-center text-slate-900 dark:text-white">
              America
            </h3>
            <p className="hidden sm:block text-3xl text-center mt-2 text-white">
              Glacier National Park
            </p>
            <p className="sm:hidden text-2xl text-centr mt-2 text-white ">
              Lake McDonald, the largest lake in the park, is the major hub of
              activity on the west side.
            </p>
          </li>
        </ul>
      </section>

      <hr className="mx-auto bg-black w-1/2" />
    </>
  );
};

export default Preview;
