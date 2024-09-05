"use client";

import React, { useState } from "react";
import Link from "next/link";

import { IoSearchCircleOutline } from "react-icons/io5";
import { IoBedOutline } from "react-icons/io5";
import { SlPlane } from "react-icons/sl";
import { IoTrainOutline } from "react-icons/io5";
import { IoBusOutline } from "react-icons/io5";
import { IoCarSportOutline } from "react-icons/io5";
import { LuCalendarClock } from "react-icons/lu";

const Navbar = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);

  const onOpenedMenu = (): void => {
    setOpen(true);
  };

  const onClosedMenu = (): void => {
    setOpen(false);
  };

  return (
    <header className="flex flex-col text-black sticky top-0 z-10 p-3 gap-5 bg-white">
      <section className="flex flex-row justify-between ">
        <div className="flex flex-row items-center gap-14">
          <div>
            <h1 className="text-2xl">
              <Link href="#hero">🗺️ Tavels</Link>
            </h1>
          </div>
          <nav className="hidden md:flex flex-row gap-8">
            <button>
              <Link href="#details">Details</Link>
            </button>
            <button>
              <Link href="#support">Support</Link>
            </button>
            <button>
              <Link href="#partenerhip">Partenership</Link>
            </button>
            <button>
              <Link href="#bookings">Bookings</Link>
            </button>
          </nav>
        </div>
        <nav className="flex flex-row gap-1 text-xs items-center">
          <button className="py-1 px-1 md:px-5 md:text-sm border-black border-2 rounded-full hover:bg-black hover:text-white hover:border-none">
            Eng
          </button>
          <button className="py-1 px-1 md:px-5 md:text-sm whitespace-nowrap border-black border-2 rounded-full hover:bg-black hover:text-white hover:border-none">
            Log in
          </button>
          <button className="bg-black text-white py-1 px-1 md:px-5 md:text-sm border-black border-2 rounded-full hover:opacity-80 hover:border-none">
            Register
          </button>
        </nav>
      </section>

      <section className="flex flex-row justify-evenly items-center text-sm lg:text-md">
        <form action="" className="relative hidden sm:block">
          <input
            type="text"
            placeholder="Search Flight"
            className="bg-slate-200 rounded-full h-7 text-left px-7 focus:outline-none"
          />
          <IoSearchCircleOutline className="absolute top-0 w-7 h-7" />
        </form>
        <button className="flex flex-row items-center gap-2 border-none bg-slate-200 rounded-full py-1 px-4 md:px-7 hover:bg-black hover:text-white">
          <IoBedOutline />
          <p className="hidden lg:block">Hotels</p>
        </button>
        <button className="flex flex-row items-center gap-2 border-none bg-slate-200 rounded-full py-1 px-4 md:px-7 hover:bg-black hover:text-white">
          <SlPlane />
          <p className="hidden lg:block">Flights</p>
        </button>
        <button className="flex flex-row items-center gap-2 border-none bg-slate-200 rounded-full py-1 px-4 md:px-7 hover:bg-black hover:text-white">
          <IoTrainOutline />
          <p className="hidden lg:block">Trains</p>
        </button>
        <button className="flex flex-row items-center gap-2 border-none bg-slate-200 rounded-full py-1 px-4 md:px-7 hover:bg-black hover:text-white">
          <IoBusOutline />
          <p className="hidden lg:block">Bus & Travel</p>
        </button>
        <button className="flex flex-row items-center gap-2 border-none bg-slate-200 rounded-full py-1 px-4 md:px-7 hover:bg-black hover:text-white">
          <IoCarSportOutline />
          <p className="hidden lg:block">Car Rental</p>
        </button>
        <button className="flex flex-row items-center gap-2 border-none bg-slate-200 rounded-full py-1 px-4 md:px-7 hover:bg-black hover:text-white">
          <LuCalendarClock />
          <p className="hidden lg:block">Event</p>
        </button>
      </section>
    </header>
  );
};

export default Navbar;
