import { contatctItems } from "@/lib/data";
import { Card, CardContent } from "./ui/card";

type ContactProps = {
  isVisible: boolean;
};

const Contact = ({ isVisible }: ContactProps) => {
  return (
    <section id="contact" className="py-16 bg-gray-50 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600">
            We'd love to hear from you. Reach out to us anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contatctItems.map((item, index) => (
            <Card
              key={item.title}
              className={`text-center transform hover:scale-105 hover:shadow-lg transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="pt-6">
                <item.icon className="w-8 h-8 text-gradient-to-r from-blue-600 to-amber-500 mx-auto mb-4 animate-bounce" />
                <h3 className="font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 whitespace-pre-line">
                  {item.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
