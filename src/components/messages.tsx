import { recentMessages } from "@/lib/data";
import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Play } from "lucide-react";
import { MediaPlayer } from "./media-player";

type MessagesProps = {
  isVisible: boolean;
  scrollY: number;
};

const Messages = ({ isVisible, scrollY }: MessagesProps) => {
  const [selectedMessage, setSelectedMessage] = useState(recentMessages[0]);

  return (
    <section id="messages" className="py-16 bg-white relative">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          transform: `translateY(${scrollY * 0.15}px)`,
        }}
      >
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-amber-50 to-blue-50"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Recent Messages
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Listen to our latest sermons and teachings. Grow in faith wherever
            you are.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <MediaPlayer
              title={selectedMessage.title}
              pastor={selectedMessage.pastor}
              date={selectedMessage.date}
              audioUrl={selectedMessage.audioUrl}
              videoUrl={selectedMessage.videoUrl}
            />
          </div>

          <div
            className={`space-y-4 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            {recentMessages.map((message, index) => (
              <Card
                key={index}
                className={`hover:shadow-md transition-shadow duration-300 cursor-pointer ${
                  selectedMessage.title === message.title
                    ? "ring-2 ring-blue-500"
                    : ""
                }`}
                onClick={() => setSelectedMessage(message)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {message.title}
                      </h4>
                      <p className="text-sm text-gray-600 mb-1">
                        {message.pastor}
                      </p>
                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                        <span>{message.date}</span>
                        <span>•</span>
                        <span>{message.duration}</span>
                        <span>•</span>
                        <span className="text-amber-600">{message.series}</span>
                      </div>
                    </div>
                    <button className="w-10 h-10 bg-gradient-to-r from-blue-600 to-amber-500 hover:from-blue-700 hover:to-amber-600 text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                      <Play className="w-5 h-5 ml-0.5" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.youtube.com/@ChristsLibertyChurch"
            target="_blank"
            className="bg-gradient-to-r py-3 px-4 rounded-md from-blue-600 to-amber-500 hover:from-blue-700 hover:to-amber-600 transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
          >
            View All Messages
          </a>
        </div>
      </div>
    </section>
  );
};

export default Messages;
