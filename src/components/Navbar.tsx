import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className=" bg-primary text-white">
      <nav className="container py-8 px-6 flex justify-between items-center">
        <div className="flex text-lg font-medium text-center">
          {[
            { href: "/#hero", label: "Home" },
            { href: "/#about", label: "About" },
            { href: "/#services", label: "Services" },
            { href: "/case-studies", label: "Case Studies" },
            { href: "/#calltoaction", label: "Contact" },
          ].map((item, idx, arr) => (
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

        <div className="flex space-x-4 text-xl">
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
      </nav>
    </div>
  );
}
