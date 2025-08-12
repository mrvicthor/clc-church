import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-scroll";
import MobileMenu from "./mobile-menu";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm border-b fixed w-full top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 animate-fade-in">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-amber-500 rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
              <img
                src="/logo.png"
                alt="Logo"
                className="w-8 h-8 rounded-full"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                Christ's Liberty Church
              </h1>
              <p className="text-sm text-gray-600">Faith • Hope • Love</p>
            </div>
          </div>
          {showMenu ? (
            <div
              className="fixed top-0 bottom-0 left-0 right-0 z-40 bg-[#040404]/20"
              onClick={() => setShowMenu(!showMenu)}
            />
          ) : null}

          <MobileMenu showMenu={showMenu} handleMenu={setShowMenu} />
          <nav className="hidden md:flex space-x-6">
            {["Home", "Events", "Messages", "About", "Contact"].map(
              (item, index) => (
                <Link
                  to={item.toLowerCase() === "home" ? "/" : item.toLowerCase()}
                  spy={true}
                  offset={-50}
                  smooth={true}
                  duration={500}
                  key={item}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 hover:scale-105 transform cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item}
                </Link>
              )
            )}
          </nav>
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="lg:hidden hover:bg-[#040C0C] rounded-md py-1 px-1"
          >
            {showMenu ? (
              <X
                className="text-black opacity-50 hover:opacity-100 cursor-pointer transition-all duration-300 ease-in-out"
                size={24}
              />
            ) : (
              <Menu
                className="text-black opacity-50 hover:opacity-100 cursor-pointer transition-all duration-300 ease-in-out"
                size={24}
              />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
