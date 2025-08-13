import { BookOpen, Heart, Mail, MapPin, Phone, Users } from "lucide-react";
import { FaFacebookF, FaSquareInstagram, FaXTwitter } from "react-icons/fa6";

export const events = [
  {
    id: 1,
    title: "Sunday Worship Service",
    date: "2025-08-17",
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
    date: "2025-08-13",
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
    date: "2025-08-16",
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
    date: "2025-08-12",
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
    title: "New Beginnings. Making room for the new",
    pastor: "Pastor Nelson Ngoka",
    date: "January 14, 2024",
    duration: "66:33",
    series: "Faith Journey",
    audioUrl: "/latest-sunday-message.mp3", // Sample audio
    videoUrl: "/sunday-service-1.mp4", // Sample video
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
  { icon: Phone, title: "Phone", content: "+44(0)20 3983 9394" },
  { icon: Mail, title: "Email", content: "admin@christslibertychurch.com" },
  {
    icon: MapPin,
    title: "Address",
    content:
      "Harris Academy South Norwood, Cumberlow Avenue, South Norwood, London. SE25 6AE",
  },
];

export const socials = [
  {
    id: 1,
    icon: FaFacebookF,
    url: "https://www.facebook.com/christslibertychurch",
  },
  {
    id: 2,
    icon: FaSquareInstagram,
    url: "https://www.instagram.com/christsliberty/",
  },
  {
    id: 3,
    icon: FaXTwitter,
    url: "https://x.com/christsliberty",
  },
];
