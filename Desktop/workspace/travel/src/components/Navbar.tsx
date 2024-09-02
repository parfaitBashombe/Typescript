"use client";

import React from "react";

const Navbar = () => {
  return (
    <header className="flex flex-row justify-between p-5 bg-green-900 h-16 items-center">
      <section id="hero">Travels</section>
      <nav>
        <ul className="flex flex-row gap-4">
          <li>Preview</li>
          <li>Contact Us</li>
          <li>About Us</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
