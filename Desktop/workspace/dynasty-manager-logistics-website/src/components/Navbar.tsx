"use client";

import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import ComponentWrapper from "./component-wrapper";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navs = ["Audit", "Manage", "Secure", "Automate", "About"];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const pathname = usePathname();

  const [isActive, setIsActive] = useState<number | null>(null);

  useEffect(() => {
    const navIndex = navs.findIndex(
      (nav) => `/${nav.toLowerCase()}` === pathname
    );
    if (navIndex !== -1) {
      setIsActive(navIndex);
    }

    console.log(navIndex);
  }, [pathname]);

  const handleLinkClick = (index: number) => {
    setIsActive(index);
  };

  return (
    <ComponentWrapper>
      <nav className="flex items-center justify-between py-4">
        <Link href="/" className="z-40 text-2xl font-bold text-blue-900">
          Bashombe
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-2 lg:gap-6">
          <ul className="space-x-4 md:flex">
            {navs.map((item, index) => (
              <Link
                onClick={() => handleLinkClick(index)}
                href={`/${item.toLowerCase()}`}
                key={index}
                className={`font-bold text-xs lg:text-sm   ${
                  isActive === index
                    ? " text-blue-900 underline "
                    : " text-gray-700 hover:text-blue-900"
                } cursor-pointer flex items-center`}
              >
                {item} {item === "Automate" && <ChevronDown size={20} />}
              </Link>
            ))}
          </ul>
          <Button className="px-4 py-2 text-white bg-green-500 rounded-2xl hover:bg-green-600">
            Book a Demo
          </Button>
        </div>

        {/* Mobile Navigation Button */}
        <div className="md:hidden flex items-center">
          <Button
            onClick={toggleMobileMenu}
            variant="outline"
            className="z-40 rounded-full h-10 w-10"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Menu with Animation */}
        <div
          className={`md:hidden absolute top-16 left-0 w-full h-[100vh] bg-white shadow-lg p-4 z-30 transform transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="space-y-4">
            {navs.map((item) => (
              <Link
                href={`/${item.toLowerCase()}`}
                key={item}
                className="text-gray-700 hover:bg-gray-200 cursor-pointer flex items-center text-sm font-bold p-2"
              >
                {item} {item === "Automate" && <ChevronDown size={20} />}
              </Link>
            ))}
          </div>
          <Button className="w-full py-2 mt-4 text-white bg-green-500 rounded hover:bg-green-600">
            Book a Demo
          </Button>
        </div>
      </nav>
    </ComponentWrapper>
  );
};

export default Navbar;
