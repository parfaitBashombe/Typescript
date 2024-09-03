"use client";

import Image from "next/image";
import mansion from "../../public/mansion.jpg";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto">
      <section
        id="hero"
        className="flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12 scroll-mt-40 widescreen:section-min-height tallscreen:section-min-height"
      >
        <article className="sm:w-1/2">
          <h2 className="max-w-md text-4xl font-bold text-center sm:text-5sl sm:text-left text-slate-900 dark:text-white">
            We provide the{" "}
            <span className="text-indingo-700 dark:text-indigo-300">
              Best places
            </span>{" "}
            to visit this year...
          </h2>

          <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            numquam totam repellendus maxime molestiae reiciendis
          </p>

          <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
            Lorem dolor.
          </p>
        </article>

        <Image src={mansion} width={450} height={550} alt="mansion" />
      </section>

      <hr className="mx-auto bg-black w-1/2" />
    </main>
  );
}
