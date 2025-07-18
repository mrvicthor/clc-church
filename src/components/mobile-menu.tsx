import { Link } from "react-scroll";
import { motion, AnimatePresence } from "motion/react";
import { containerVariants, itemVariants } from "../utils";

type MobileMenuProps = {
  handleMenu: React.Dispatch<React.SetStateAction<boolean>>;
  showMenu: boolean;
};

const MobileMenu = ({ handleMenu, showMenu }: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {showMenu ? (
        <motion.section
          initial={{ height: 0 }}
          animate={{ height: "40vh" }}
          exit={{
            height: 0,
            transition: { delay: 0.7, duration: 0.3 },
          }}
          className="lg:hidden fixed top-20 left-0 w-full bg-black px-4 flex-col z-50"
        >
          <motion.ul
            variants={containerVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className=" flex gap-6 py-16 px-4 flex-col"
          >
            {" "}
            {["Home", "Events", "Messages", "About", "Contact"].map(
              (item, index) => (
                <motion.li key={item} variants={itemVariants}>
                  <Link
                    to={item.toLowerCase()}
                    spy={true}
                    smooth={true}
                    duration={500}
                    onClick={() => handleMenu(false)}
                    className="text-white hover:text-blue-600 font-medium transition-colors duration-300 hover:scale-105 transform cursor-pointer"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {item}
                  </Link>
                </motion.li>
              )
            )}
          </motion.ul>
        </motion.section>
      ) : null}
    </AnimatePresence>
  );
};

export default MobileMenu;
