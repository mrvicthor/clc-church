import { events } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Button } from "./ui/button";

type EventsProps = {
  isVisible: boolean;
  scrollY: number;
};

const Events = ({ isVisible, scrollY }: EventsProps) => {
  return (
    <>
      <section id="events" className="py-16 bg-gray-50 relative">
        {/* Parallax Background */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-100 to-purple-100"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div
            className={`text-center mb-12 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Church Events
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay connected with our church community through our upcoming
              events and activities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {events.map((event, index) => (
              <Card
                key={event.id}
                className={`overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 p-0 h-full flex flex-col ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-blue-600 to-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium animate-pulse">
                      {event.category}
                    </span>
                  </div>
                </div>
                <CardHeader className="pb-4 flex-shrink-0">
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {event.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-6 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>
                        {new Date(event.date).toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <Button
                    asChild
                    className="w-full mt-4 bg-transparent hover:from-blue-700 hover:to-amber-600 hover:bg-gradient-to-r hover:text-white transition-all duration-300 transform hover:scale-105"
                    variant="outline"
                  >
                    <a
                      href={event.link}
                      target={event.link === "" ? "_parent" : "_blank"}
                    >
                      Learn More
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-amber-500 hover:from-blue-700 hover:to-amber-600 transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
            >
              View All Events
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Events;
