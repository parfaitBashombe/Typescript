import React from "react";

const Promos = () => {
  return (
    <div className="max-w-6xl mx-auto my-10 flex flex-col">
      <section
        id="bigPromo"
        className="flex flex-row items-center justify-evenly gap-28"
      >
        <p className="flex-2">Big Promo</p>
        <p className="flex-2 text-3xl">
          Limited Time Offer Book Now and Save Big!
        </p>
        <p className="flex-3">
          Big Promo Alert! Are you ready for the ultimate adventure at an
          unbeatable price ? Travel is thrilled to announce our latest Big
          Promo, offering you incredible deals on your dream vacations!
          <button className="bg-black text-white py-1 px-1 md:px-5 md:text-sm border-black border-2 rounded-full hover:opacity-80 hover:border-none">
            Book Now
          </button>
        </p>
      </section>
      <section id="ramadanPromo"></section>
    </div>
  );
};

export default Promos;
