"use client";
import { IoBedOutline } from "react-icons/io5";

export default function Home() {
  return (
    <main
      id="hero"
      className="max-w-4xl mx-auto flex flex-row justify-evenly items-center py-20"
    >
      <section className="flex flex-col gap-4">
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
      <section className="w-96 h-56 bg-slate-500">Find Hotels</section>
    </main>
  );
}
