"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  SkipBack,
  SkipForward,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

interface MediaPlayerProps {
  title: string;
  pastor: string;
  date: string;
  audioUrl?: string;
  videoUrl?: string;
}

export function MediaPlayer({
  title,
  pastor,
  date,
  audioUrl,
  videoUrl,
}: MediaPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const mediaRef = useRef<HTMLAudioElement | HTMLVideoElement>(null);
  const [playerType, setPlayerType] = useState<"audio" | "video">("audio");

  const progressPercentage = duration ? (currentTime / duration) * 100 : 0;

  useEffect(() => {
    const media = mediaRef.current;
    if (!media) return;

    const updateTime = () => setCurrentTime(media.currentTime);
    const updateDuration = () => setDuration(media.duration);
    const handleEnded = () => setIsPlaying(false);

    media.addEventListener("timeupdate", updateTime);
    media.addEventListener("loadedmetadata", updateDuration);
    media.addEventListener("ended", handleEnded);

    return () => {
      media.removeEventListener("timeupdate", updateTime);
      media.removeEventListener("loadedmetadata", updateDuration);
      media.removeEventListener("ended", handleEnded);
    };
  }, [playerType]);

  useEffect(() => {
    setCurrentTime(0);
    setDuration(0);
    setIsPlaying(false);
  }, [playerType]);

  const togglePlay = () => {
    console.log("togglePlay");
    const media = mediaRef.current;
    if (!media) return;
    console.log({ isPlaying, media });
    if (isPlaying) {
      console.log("Pausing media");
      media.pause();
    } else {
      console.log("Playing media");
      media.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (value: number[]) => {
    const media = mediaRef.current;
    if (!media) return;

    const newTime = (value[0] / 100) * duration;
    media.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (value: number[]) => {
    const media = mediaRef.current;
    if (!media) return;

    const newVolume = value[0] / 100;
    media.volume = newVolume;
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const toggleMute = () => {
    const media = mediaRef.current;
    if (!media) return;

    if (isMuted) {
      media.volume = volume;
      setIsMuted(false);
    } else {
      media.volume = 0;
      setIsMuted(true);
    }
  };

  const skipTime = (seconds: number) => {
    const media = mediaRef.current;
    if (!media) return;

    media.currentTime = Math.max(
      0,
      Math.min(duration, media.currentTime + seconds)
    );
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const handlePlayerTypeChange = (type: "audio" | "video") => {
    const media = mediaRef.current;
    if (!media) return;

    media.pause();
    setPlayerType(type);
  };

  return (
    <>
      <div className="mb-4 flex gap-2">
        <Button
          onClick={() => handlePlayerTypeChange("audio")}
          variant={playerType === "audio" ? "default" : "outline"}
          size="sm"
          className={
            playerType === "audio"
              ? "bg-gradient-to-r from-blue-600 to-amber-500"
              : ""
          }
        >
          Audio
        </Button>
        <Button
          onClick={() => handlePlayerTypeChange("video")}
          variant={playerType === "video" ? "default" : "outline"}
          size="sm"
          className={
            playerType === "video"
              ? "bg-gradient-to-r from-blue-600 to-amber-500"
              : ""
          }
        >
          Video
        </Button>
      </div>
      <div className="bg-gradient-to-r from-blue-600 to-amber-500 rounded-lg p-6 text-white">
        {/* Media Element */}
        {playerType === "video" ? (
          <video
            ref={mediaRef as React.RefObject<HTMLVideoElement>}
            src={videoUrl}
            className="w-full h-48 rounded-lg mb-4 bg-black"
            controls={false}
          />
        ) : (
          <audio
            ref={mediaRef as React.RefObject<HTMLAudioElement>}
            src={audioUrl}
          />
        )}

        {/* Media Info */}
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-1">{title}</h3>
          <p className="text-white/80 text-sm">
            {pastor} • {date}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <Slider
            value={[progressPercentage]}
            onValueChange={handleSeek}
            max={100}
            step={0.1}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-white/70 mt-1">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Button
              onClick={() => skipTime(-10)}
              size="sm"
              variant="ghost"
              className="text-white hover:bg-white/20"
            >
              <SkipBack className="w-4 h-4" />
            </Button>

            <Button
              onClick={togglePlay}
              size="lg"
              className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full"
            >
              {isPlaying ? (
                <Pause className="w-6 h-6" />
              ) : (
                <Play className="w-6 h-6 ml-1" />
              )}
            </Button>

            <Button
              onClick={() => skipTime(10)}
              size="sm"
              variant="ghost"
              className="text-white hover:bg-white/20"
            >
              <SkipForward className="w-4 h-4" />
            </Button>
          </div>

          <div className="flex items-center space-x-2">
            <Button
              onClick={toggleMute}
              size="sm"
              variant="ghost"
              className="text-white hover:bg-white/20"
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4" />
              ) : (
                <Volume2 className="w-4 h-4" />
              )}
            </Button>
            <div className="w-20">
              <Slider
                value={[isMuted ? 0 : volume * 100]}
                onValueChange={handleVolumeChange}
                max={100}
                step={1}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
