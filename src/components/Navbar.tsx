"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    
    const closeMenu = () => setIsMenuOpen(false);
    document.addEventListener("click", closeMenu);
    
    return () => document.removeEventListener("click", closeMenu);
  }, [isMenuOpen]);

  const navLinks = [
    { href: "/#hero", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#services", label: "Services" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/#calltoaction", label: "Contact" },
  ];

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`bg-primary text-white ${isScrolled ? "shadow-md" : ""}`}>
      <nav className="container py-4 md:py-8 px-4 md:px-6 flex justify-between items-center relative">
        <div className="text-xl font-bold">
          <Link href="/">
            Afzal
          </Link>
        </div>

        <div className="hidden md:flex text-lg font-medium text-center">
          {navLinks.map((item, idx, arr) => (
            <div
              key={item.label}
              className={`flex items-center justify-center px-5 ${
                idx !== arr.length - 1 ? "border-r border-white/30" : ""
              }`}
            >
              <Link
                href={item.href}
                className="hover:text-gray-300 transition-colors duration-300"
              >
                {item.label}
              </Link>
            </div>
          ))}
        </div>

        <div className="hidden md:flex space-x-4 text-xl">
          <Link
            href="#"
            className="hover:text-gray-300 transition-colors duration-300"
          >
            <FaFacebook />
          </Link>
          <Link
            href="#"
            className="hover:text-gray-300 transition-colors duration-300"
          >
            <FaTwitter />
          </Link>
          <Link
            href="#"
            className="hover:text-gray-300 transition-colors duration-300"
          >
            <FaInstagram />
          </Link>
        </div>

        <button 
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {isMenuOpen && (
          <div 
            className="absolute top-full right-0 left-0 bg-primary shadow-lg py-4 z-50 md:hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col space-y-4 px-6">
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="py-2 hover:text-gray-300 transition-colors duration-300 border-b border-white/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              <div className="flex space-x-6 py-4 justify-center text-xl">
                <Link
                  href="#"
                  className="hover:text-gray-300 transition-colors duration-300"
                >
                  <FaFacebook />
                </Link>
                <Link
                  href="#"
                  className="hover:text-gray-300 transition-colors duration-300"
                >
                  <FaTwitter />
                </Link>
                <Link
                  href="#"
                  className="hover:text-gray-300 transition-colors duration-300"
                >
                  <FaInstagram />
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}