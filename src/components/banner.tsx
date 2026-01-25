import { ChevronLeft, ChevronRight } from "lucide-react";
// import { Button } from "./ui/button";
import { useEffect, useState } from "react";
// import { Link } from "react-scroll";
import { gsap } from "gsap";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto-advance every 5 seconds
    return () => clearInterval(interval);
  }, []);
  return (
    <section
      id="hero"
      className="relative text-white mt-20 overflow-hidden h-[calc(100vh-5rem)]"
    >
      {/* Carousel Container */}
      <div className="relative w-full h-full">
        {/* Slides */}
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {/* Slide 1 */}
          <div className="w-full flex-shrink-0 relative">
            {/* Parallax Background Elements */}

            <div className="mx-auto px-4 text-center relative flex flex-col justify-center z-10 h-full py-16 bg-[url('/banner-2026.jpeg')] bg-cover bg-top bg-no-repeat">
              <h2
                onMouseEnter={() =>
                  gsap.to("#cursor", { scale: 8, duration: 0.3 })
                }
                onMouseLeave={() =>
                  gsap.to("#cursor", { scale: 1, duration: 0.3 })
                }
                className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up text-shadow-accent"
              >
                Welcome to Our Church Family
              </h2>
              <p
                onMouseEnter={() =>
                  gsap.to("#cursor", { scale: 8, duration: 0.3 })
                }
                onMouseLeave={() =>
                  gsap.to("#cursor", { scale: 1, duration: 0.3 })
                }
                className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-300 text-shadow-accent"
              >
                Join us as we grow in faith, serve our community, and worship
                together in love and unity.
              </p>
              {/* <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
                <Button
                  size="lg"
                  className="bg-white text-amber-600 hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
                >
                  <Link
                    to="events"
                    offset={-50}
                    smooth={true}
                    duration={500}
                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 hover:scale-105 transform cursor-pointer"
                  >
                    Join Us This Sunday
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-amber-600 bg-transparent transform hover:scale-105 transition-all duration-300"
                >
                  <Link
                    to="about"
                    offset={-50}
                    smooth={true}
                    duration={500}
                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 hover:scale-105 transform cursor-pointer"
                  >
                    Learn More About Us
                  </Link>
                </Button>
              </div> */}
            </div>
          </div>

          {/* Slide 2 */}
          <div className="w-full flex-shrink-0 relative bg-[url('/slide2.jpg')] bg-cover bg-center flex flex-col justify-center">
            <div className="container mx-auto px-4 text-center relative z-10 py-16">
              <h2
                onMouseEnter={() =>
                  gsap.to("#cursor", { scale: 8, duration: 0.3 })
                }
                onMouseLeave={() =>
                  gsap.to("#cursor", { scale: 1, duration: 0.3 })
                }
                className="text-4xl md:text-6xl font-bold mb-6"
              >
                Experience God's Love
              </h2>
              <p
                onMouseEnter={() =>
                  gsap.to("#cursor", { scale: 8, duration: 0.3 })
                }
                onMouseLeave={() =>
                  gsap.to("#cursor", { scale: 1, duration: 0.3 })
                }
                className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
              >
                Discover a place where faith comes alive and community
                flourishes in Christ's love.
              </p>
              {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
                >
                  <Link to="contact" smooth={true} duration={500}>
                    Plan Your Visit
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent transform hover:scale-105 transition-all duration-300"
                >
                  <a
                    target="_blank"
                    href="https://www.youtube.com/live/qKS83LrHThA?si=fR30CxMQqUXrbgGQ"
                  >
                    Watch Online
                  </a>
                </Button>
              </div> */}
            </div>
          </div>

          {/* Slide 3 */}
          <div className="w-full flex-shrink-0 relative bg-[url('/slide4.jpg')] bg-cover bg-center flex flex-col justify-center">
            <div className="container mx-auto px-4 text-center relative z-10 py-16">
              <h2
                onMouseEnter={() =>
                  gsap.to("#cursor", { scale: 8, duration: 0.3 })
                }
                onMouseLeave={() =>
                  gsap.to("#cursor", { scale: 1, duration: 0.3 })
                }
                className="text-4xl md:text-6xl font-bold mb-6"
              >
                Serve Our Community
              </h2>
              <p
                onMouseEnter={() =>
                  gsap.to("#cursor", { scale: 8, duration: 0.3 })
                }
                onMouseLeave={() =>
                  gsap.to("#cursor", { scale: 1, duration: 0.3 })
                }
                className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
              >
                Together, we make a difference through acts of service and
                compassion in our neighborhood.
              </p>
              {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-purple-600 hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
                >
                  <Link to="section1" smooth={true} duration={500}>
                    Get Involved
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-purple-600 bg-transparent transform hover:scale-105 transition-all duration-300"
                >
                  <Link to="section1" smooth={true} duration={500}>
                    Volunteer Today
                  </Link>
                </Button>
              </div> */}
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-3 rounded-full transition-all duration-300 z-20"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-3 rounded-full transition-all duration-300 z-20"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/75"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;
