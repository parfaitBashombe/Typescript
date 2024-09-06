import React from "react";

const Promos = (): JSX.Element => {
  return (
    <div className="max-w-6xl mx-auto my-10 flex flex-col">
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
      <section id="specialPromo">
        <p id="summerPromo" className="bg-scroll bg-hero-image bg-cover">
          Summer Promo
        </p>
        <div id="explorePromo">
          <div id="explore">
            <title>{`Let's Explore Together`}</title>
            <p>
              At Travel, the world is our playground, and every journey is an
              oportunity to discover something new. Join us as we explore the
              wonders of the world and create memories that will last a
              lifetime.
            </p>
          </div>
          <div id="ramadanPromo"></div>
        </div>
        <div id="voyage"></div>
      </section>
    </div>
  );
};

export default Promos;
