import { FaFacebookF, FaSquareInstagram, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white py-12 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-32 h-32 bg-amber-500/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-blue-500/20 rounded-full animate-pulse animation-delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="animate-fade-in">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-amber-500 rounded-full flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="w-8 h-8 rounded-full"
                />
              </div>
              <h3 className="text-lg font-bold">Grace Community Church</h3>
            </div>
            <p className="text-gray-400">
              Building faith, hope, and love in our community since 1998.
            </p>
          </div>

          <div className="animate-fade-in animation-delay-200">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              {["Home", "Events", "Messages", "About", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to={item.toLowerCase()}
                      smooth={true}
                      duration={500}
                      className="hover:text-white transition-colors duration-300"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="animate-fade-in animation-delay-400">
            <h4 className="font-semibold mb-4">Service Times</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Sunday Worship: 10:00 AM</li>
              <li>Wednesday Bible Study: 7:30 PM</li>
              <li>Youth Group: Wed 7:00 PM</li>
            </ul>
          </div>

          <div className="animate-fade-in animation-delay-600">
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {[FaFacebookF, FaSquareInstagram, FaXTwitter].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-gray-400 hover:text-white transform hover:scale-125 transition-all duration-300"
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                )
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Christ Liberty Church. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
