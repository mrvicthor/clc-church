import { Heart } from "lucide-react";
import { Button } from "./ui/button";

type PastorProps = {
  isVisible: boolean;
};

const Pastor = ({ isVisible }: PastorProps) => {
  return (
    <section
      id="pastor"
      className="py-16 bg-gradient-to-r from-blue-50 to-amber-50 relative overflow-hidden"
    >
      {/* Parallax Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          transform: `translateY(${scrollY * 0.25}px)`,
        }}
      >
        <div className="absolute top-20 left-10 w-40 h-40 bg-blue-200 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-amber-200 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Pastor's Image */}
            <div
              className={`relative transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-amber-500 rounded-2xl blur opacity-20"></div>
                <div className="relative bg-white rounded-2xl p-6 shadow-xl">
                  <div className="relative h-96 rounded-xl overflow-hidden">
                    <img
                      src="/pastor-nelson.jpg"
                      alt="Pastor Nelson Ngoka"
                      className="object-cover"
                    />
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      Pastor Nelson Ngoka
                    </h3>
                    <p className="text-amber-600 font-medium">Host Pastor</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Serving since 1998
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pastor's Message */}
            <div
              className={`transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="mb-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    A Message from Our Pastor
                  </h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-amber-500 rounded-full"></div>
                </div>

                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="text-lg">
                    "Welcome to Christ Liberty Church! For over 25 years, we
                    have been blessed to serve this wonderful community and
                    witness God's amazing work in the lives of countless
                    families."
                  </p>

                  <p>
                    "Our church is more than just a building - we are a family
                    united by faith, hope, and love. Whether you're seeking
                    spiritual growth, community connection, or simply a place to
                    belong, you'll find a warm welcome here."
                  </p>

                  <p>
                    "I invite you to join us this Sunday as we worship together,
                    learn from God's Word, and experience the joy of Christian
                    fellowship. Come as you are - God has amazing plans for your
                    life!"
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-amber-500 rounded-full flex items-center justify-center">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        Blessings & Peace,
                      </p>
                      <p className="text-amber-600 font-medium text-lg">
                        Pastor Nelson Ngoka
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gradient-to-r from-blue-600 to-amber-500 hover:from-blue-700 hover:to-amber-600 transform hover:scale-105 transition-all duration-300">
                    Schedule a Meeting
                  </Button>
                  <Button
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 bg-transparent"
                  >
                    Read Pastor's Blog
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pastor;
