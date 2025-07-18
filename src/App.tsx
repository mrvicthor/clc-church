// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";

import { useEffect, useState } from "react";
import Banner from "./components/banner";
import Cursor from "./components/cursor";
import Events from "./components/events";
import Header from "./components/header";
import Messages from "./components/messages";
import Pastor from "./components/pastor";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({
    hero: false,
    events: false,
    messages: false,
    pastor: false,
    about: false,
    contact: false,
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            setIsVisible((prev) => ({ ...prev, [sectionId]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Cursor />
      <Header />
      <main>
        <Banner />
        <Events isVisible={isVisible.events} scrollY={scrollY} />
        <Messages isVisible={isVisible.messages} scrollY={scrollY} />
        <Pastor isVisible={isVisible.pastor} scrollY={scrollY} />
        <About isVisible={isVisible.about} scrollY={scrollY} />
        <Contact isVisible={isVisible.contact} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
