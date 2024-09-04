import React from "react";
import Link from "next/link";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer id="footer" className="bg-black text-white text-md">
      <section className="max-w-4xl mx-auto p-4 flex flex-col sm:flex-row sm:justify-between">
        <address className="mt-1">
          <h2 className="mb-3">Travel.</h2>
          At Travel, we believe tht evry journey is
          <br /> an oportunity for adventure, discovery,
          <br /> and unforgettable experiences.
          <br />
          <p className="my-2">
            Email:{" "}
            <Link className="" href="mailto:parfaitbashombe@gmail.com">
              parfaitbashombe@gmail.com
            </Link>
          </p>
          Phone: <Link href="tel:+2431999999">(+2) 431999999</Link>
        </address>

        <nav className="hidden md:flex flex-col gap-2" aria-label="footer">
          <Link href="#naviation" className="hover:opacity-90">
            <h1 className="text-lg">Navigation</h1>
          </Link>
          <Link href="#services" className="hover:opacity-50 opacity-60">
            Services
          </Link>
          <Link href="#products" className="hover:opacity-50 opacity-60">
            Products
          </Link>
          <Link href="#about" className="hover:opacity-50 opacity-60">
            About
          </Link>
        </nav>

        <nav className="hidden md:flex flex-col gap-2" aria-label="footer">
          <Link href="#naviation" className="hover:opacity-90">
            <h1 className="text-lg">Navigation</h1>
          </Link>
          <Link href="#services" className="hover:opacity-50 opacity-60">
            Services
          </Link>
          <Link href="#products" className="hover:opacity-50 opacity-60">
            Products
          </Link>
          <Link href="#about" className="hover:opacity-50 opacity-60">
            About
          </Link>
        </nav>

        <div className="flex flex-col sm:gap-2">
          <p className="text-right">
            Copyright &copy; <span id="year">{year}</span>
          </p>
          <p className="text-right">All Rights Reserved</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
