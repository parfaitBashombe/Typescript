"use client";

import React, { useState } from "react";
import Link from "next/link";

import { FaBed } from "react-icons/fa6";

const Navbar = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);

  const onOpenedMenu = (): void => {
    setOpen(true);
  };

  const onClosedMenu = (): void => {
    setOpen(false);
  };

  return (
    <header className="bg-slate-200 text-black sticky top-0 z-10 py-3">
      <section
        id="triptrap"
        className="max-w-6xl mx-auto p-4 flex justify-between start-2 items-center"
      >
        <div className="flex flex-row justify-between items-center gap-10">
          <h1 className="text-3xl font-medium">
            <Link href="#hero">🗺️ Travels</Link>
          </h1>
          {/* <div>
          <button
            onClick={() => onOpenedMenu()}
            className="text-3xl md:hidden cursor-pointer"
          >
            &#9776;
          </button>
        </div> */}
          <nav className="hidden md:block space-x-8 text-lg" aria-label="main">
            <Link href="#details" className="hover:opacity-90">
              Details
            </Link>
            <Link href="#support" className="hover:opacity-90">
              Support
            </Link>
            <Link href="#partenership" className="hover:opacity-90">
              Partenership
            </Link>
            <Link href="#bookings" className="hover:opacity-90">
              Bookings
            </Link>
          </nav>
        </div>

        <nav id="loging" className="flex flex-row justify-evenly gap-3">
          <button className="py-1 px-3 text-center border-black border-2  rounded-full">
            Eng
          </button>
          <button className="py-1 px-3 text-center border-black border-2  rounded-full">
            Log in
          </button>
          <button className="py-1 px-3 text-center text-white bg-black border-none  rounded-full">
            Register
          </button>
        </nav>
      </section>

      <section className="flex flex-row">
        <form action="" className="max-w-80 mx-auto text-xl sm:text-xl">
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Search Flight"
            className="w-full text-black text-2xl sm:text-xl p-3 rounded-full h-10 border border-solid border-slate-900 focus:outline-none"
          />
        </form>
        <div className="" id="buttons">
          <button className="flex space-x-2 py-1 px-3 text-center border-black hover:bg-black hover:text-white hover:border-none border-2  rounded-full">
            <p>Hotels</p> <FaBed />
          </button>
          <button className="py-1 px-3 text-center border-black hover:bg-black hover:text-white hover:border-none border-2  rounded-full">
            Flights
          </button>
          <button className="py-1 px-3 text-center border-black hover:bg-black hover:text-white hover:border-none border-2  rounded-full">
            Trains
          </button>
          <button className="py-1 px-3 text-center border-black hover:bg-black hover:text-white hover:border-none border-2  rounded-full">
            Bus & Travels
          </button>
          <button className="py-1 px-3 text-center border-black hover:bg-black hover:text-white hover:border-none border-2  rounded-full">
            Car Rental
          </button>
          <button className="py-1 px-3 text-center border-black hover:bg-black hover:text-white hover:border-none border-2  rounded-full">
            Events
          </button>
        </div>
      </section>

      {/* <section
        onClick={() => onClosedMenu()}
        id="mobile-menu"
        className={`absolute top-0 bg-black w-full text-5xl flex-col justify-content-center origin-top animate-open-menu ${
          open ? "flex" : "hidden"
        }`}
      >
        <button className="text-5xl self-end px-5 py-2">&times;</button>
        <nav
          className="flex flex-col h-screen items-center py-8"
          aria-label="mobile"
        >
          <Link
            href="#hero"
            className="w-full text-center py-6 hover:opacity-90"
          >
            Home
          </Link>
          <Link
            href="#preview"
            className="w-full text-center py-6 hover:opacity-90"
          >
            Preview
          </Link>
          <Link
            href="#about"
            className="w-full text-center py-6 hover:opacity-90"
          >
            About us
          </Link>
          <Link
            href="#contacts"
            className="w-full text-center py-6 hover:opacity-90"
          >
            Contact Us
          </Link>
          <Link
            href="#footer"
            className="w-full text-center py-6 hover:opacity-90"
          >
            Legal
          </Link>
        </nav>
      </section> */}
    </header>
  );
};

export default Navbar;
