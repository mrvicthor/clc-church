
import { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Play } from "lucide-react";
import { MediaPlayer } from "./media-player";
import { useFetchVideos } from "@/hooks/useFetchVideos";


type MessagesProps = {
  isVisible: boolean;
  scrollY: number;
};

type YouTubeVideo = {
  id: string;
  title: string;
  description: string;
  publishedAt: string;
  url: string;
  thumbnail: string;
  duration: string;
  views: number;
};

const Messages = ({ isVisible, scrollY }: MessagesProps) => {
  const [selectedVideo, setSelectedVideo] = useState<YouTubeVideo | null>(null)
  const { data, isLoading, isError, error } = useFetchVideos()
  const videos: YouTubeVideo[] = data ? data.videos : []
  const latestVideos = videos.slice(0, 3);

  useEffect(() => {
    if (!selectedVideo && latestVideos.length) {
      setSelectedVideo(latestVideos[0]);
    }
  }, [latestVideos, selectedVideo]);

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
          className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
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


        {isLoading && <p>Loading videos…</p>}
        {isError && <p>Error: {(error as Error).message}</p>}


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {!isLoading && !isError && (
            <>

              <div
                className={`transition-all duration-1000 ${isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
                  }`}
              >

                <MediaPlayer
                  id={selectedVideo?.id as string}
                  title={selectedVideo?.title as string}
                  // pastor={selectedVideo. as string}
                  date={selectedVideo?.publishedAt as string}
                  // audioUrl={selected.audioUrl}
                  videoUrl={selectedVideo?.url}
                />
              </div>
              <div
                className={`space-y-4 transition-all duration-1000 ${isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
                  }`}
              >

                {latestVideos.map((video: YouTubeVideo) => (
                  <Card
                    key={video.id}
                    className={`hover:shadow-md transition-shadow duration-300 cursor-pointer ${selectedVideo?.title === video.title
                      ? "ring-2 ring-blue-500"
                      : ""
                      }`}
                    onClick={() => setSelectedVideo(video)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-1">
                            {video.title}
                          </h4>
                          {/* <p className="text-sm text-gray-600 mb-1">
                          {video.description}
                        </p> */}
                          <div className="flex items-center space-x-4 text-xs text-gray-500">
                            {/* <span>{video.publishedAt}</span>
                          <span>•</span>
                          <span>{video.duration}</span>
                          <span>•</span> */}
                            <span className="text-amber-600">{new Date(video.publishedAt).toLocaleDateString()}</span>
                          </div>
                        </div>
                        <button className="w-10 h-10 bg-gradient-to-r from-blue-600 to-amber-500 hover:from-blue-700 hover:to-amber-600 text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                          <Play className="w-5 h-5 ml-0.5" />
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                ))
                }
              </div>
            </>
          )}

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
