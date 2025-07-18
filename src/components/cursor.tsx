import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { Link } from "react-scroll";
const Cursor = () => {
  const [showAboutMe, setShowAboutMe] = useState(false);
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      gsap.to("#cursor", {
        x: clientX - 20 / 2,
        y: clientY - 20 / 2,
        duration: 1,
        delay: 0,
        ease: "power4.out",
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const show = () => setShowAboutMe(true);
    const hide = () => setShowAboutMe(false);

    window.addEventListener("showAboutMe", show);
    window.addEventListener("hideAboutMe", hide);

    return () => {
      window.removeEventListener("showAboutMe", show);
      window.removeEventListener("hideAboutMe", hide);
    };
  }, []);
  return (
    <div
      id="cursor"
      className={`hidden md:block fixed top-0 left-0  h-5 w-5   rounded-full z-5 pointer-events-none ${
        showAboutMe ? "bg-transparent" : "bg-white mix-blend-difference"
      } `}
    >
      {showAboutMe && (
        <button className="w-[10rem] border border-white/30 rounded-2xl py-2 z-10 bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2">
          <Link to="about" smooth={true} duration={500} className="capitalize">
            about me
          </Link>{" "}
        </button>
      )}
    </div>
  );
};

export default Cursor;
