import React from "react";

import { MdOutlineArrowOutward } from "react-icons/md";

const Promos = (): JSX.Element => {
  return (
    <div className="max-w-6xl mx-auto my-10 flex flex-col h-60 bg-green-300">
      <section
        id="bigPromo"
        className="flex flex-col gap-2 md:gap-16 justify-between md:flex-row py-10 text-left"
      >
        <p className="flex-1 py-1 text-xl p-2">
          Big <br /> Promo
        </p>
        <p className="text-3xl flex-1 py-1 p-2">
          Limited Time Offer Book Now and Save Big!
        </p>
        <p className="flex-1 flex flex-col gap-2 justify-start items-start p-2 text-sm">
          Big Promo Alert! Are you ready for the ultimate adventure at an
          unbeatable price ? Travel is thrilled to announce our latest Big
          Promo, offering you incredible deals on your dream vacations!
          <button className="bg-black text-white py-1 px-1 md:px-5 md:text-sm border-black border-2 rounded-full hover:opacity-80 hover:border-none">
            Book Now
          </button>
        </p>
      </section>
      <section
        id="specialPromo"
        className="h-1/2 flex flex-row justify-evenly gap-10"
      >
        <p id="summerPromo" className="flex-1 bg-scroll bg-hero-image bg-cover">
          Summer Promo
        </p>
        <div
          id="explorePromo"
          className="flex flex-row gap-10 h-full bg-red-500"
        >
          <div id="explore" className="">
            <title>{`Let's Explore Together`}</title>
            <p>
              At Travel, the world is our playground, and every journey is an
              oportunity to discover something new. Join us as we explore the
              wonders of the world and create memories that will last a
              lifetime.
            </p>
          </div>
          <div id="ramadanPromo" className="">
            <p>
              Enjoy a 50% discount on your train tickets. Book now with Travel
              and embrace the spirit of season as you embark on your
              unforgettable journey.
            </p>
            <title>Ramadan Promo</title>
          </div>
        </div>
        <div id="voyage" className="bg-scroll bg-hero-image bg-cover">
          <button className="p-4 bg-slate-100 rounded-full">
            <MdOutlineArrowOutward />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Promos;
