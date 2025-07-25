import { BookOpen, Heart, Mail, MapPin, Phone, Users } from "lucide-react";

export const events = [
  {
    id: 1,
    title: "Sunday Worship Service",
    date: "2025-07-20",
    time: "10:00 AM",
    location: "Haris Academy, South Norwood Cumber Avenue. SE25 6AE",
    description:
      "Join us for our weekly worship service with inspiring music and biblical teaching.",
    image: "/SundayService-2.webp",
    category: "Worship",
  },
  {
    id: 2,
    title: "Wednesday Bible Study",
    date: "2025-07-23",
    time: "7:30 PM",
    location: "Online - YouTube Live",
    description:
      "A dynamic Bible study session designed for teenagers and young adults.",
    image: "/wednesday-fellowship.webp",
    category: "Youth",
  },
  {
    id: 3,
    title: "Relate Group",
    date: "2024-01-27",
    time: "9:00 AM",
    location: "Online - Zoom",
    description:
      "Our weekly relate groups provide an opportunity for people to connect and build life-long friendships.",
    image: "/RelateGroups.webp",
    category: "Outreach",
  },
  {
    id: 4,
    title: "Prayer Meeting",
    date: "2024-01-31",
    time: "6:30 PM",
    location: "Online - Zoom",
    description:
      "Come together in prayer for our church, community, and world.",
    image: "/prayer.jpg",
    category: "Prayer",
  },
];

export const recentMessages = [
  {
    title: "Walking in Faith",
    pastor: "Pastor John Smith",
    date: "January 14, 2024",
    duration: "35:42",
    series: "Faith Journey",
    audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav", // Sample audio
    videoUrl:
      "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4", // Sample video
  },
  {
    title: "Love Without Limits",
    pastor: "Pastor Sarah Johnson",
    date: "January 7, 2024",
    duration: "42:15",
    series: "God's Love",
    audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
  },
  {
    title: "Hope in Difficult Times",
    pastor: "Pastor John Smith",
    date: "December 31, 2023",
    duration: "38:20",
    series: "New Year Series",
    audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
  },
  {
    title: "The Power of Prayer",
    pastor: "Pastor Michael Brown",
    date: "December 24, 2023",
    duration: "29:45",
    series: "Christmas Special",
    audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
  },
];

export const aboutItems = [
  {
    icon: Users,
    title: "Community",
    desc: "Building lasting relationships",
  },
  {
    icon: BookOpen,
    title: "Bible Teaching",
    desc: "Grounded in God's Word",
  },
  {
    icon: Heart,
    title: "Service",
    desc: "Serving others with love",
  },
  {
    icon: Users,
    title: "Worship",
    desc: "Praising God together",
  },
];

export const contatctItems = [
  { icon: Phone, title: "Phone", content: "(555) 123-4567" },
  { icon: Mail, title: "Email", content: "info@gracechurch.com" },
  {
    icon: MapPin,
    title: "Address",
    content: "123 Faith Street\nHope City, HC 12345",
  },
];
