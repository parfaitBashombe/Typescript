"use client";
import { IoBedOutline } from "react-icons/io5";

export default function Home() {
  return (
    <main
      id="hero"
      className="max-w-6xl mx-auto my-3 flex flex-row justify-evenly items-center flex-wrap lg:flex-nowrap gap-10 p-20 text-white rounded-3xl bg-scroll bg-hero-image bg-cover"
    >
      <section className="flex flex-col gap-4 flex-3">
        <div>
          <p className="text-3xl mb-4">
            Where You Get Trappped in the Beauty of the World and Unforgettable
            Happiness!
          </p>
          <button className="flex flex-row items-center gap-2 border-none rounded-full py-1 px-3 md:px-4 bg-black hover:opacity-80 text-white">
            <IoBedOutline />
            <p className="hidden lg:block">Booking Now</p>
          </button>
        </div>
        <details>
          At Travel, we believe that every journey is an oportunity for
          adventure, discovery, and unforgettable experiences.
        </details>
      </section>
      <section className="flex-2 w-96 h-56 bg-slate-500 rounded-3xl p-3">
        Find Hotels
      </section>
    </main>
  );
}
