import { aboutItems } from "@/lib/data";

type AboutProps = {
  isVisible: boolean;
  scrollY: number;
};

const About = ({ isVisible, scrollY }: AboutProps) => {
  return (
    <section id="about" className="py-16 relative overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-purple-200 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Our Church
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Christ's Liberty Church has been serving our community for over 25
              years. We are a diverse, welcoming congregation committed to
              following Jesus Christ and making a positive impact in our world.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {aboutItems.map((item, index) => (
                <div
                  key={item.title}
                  className={`flex items-start space-x-3 transform hover:scale-105 transition-all duration-300 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-5"
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <item.icon className="w-6 h-6 text-amber-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className={`relative h-48 lg:h-full transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <img
              src="/about.jpg"
              alt="Church community"
              className="object-cover rounded-lg transform hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
