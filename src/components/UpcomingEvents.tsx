import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";

const upcomingWebinars = [
  {
    title: "Mastering Music Theory",
    description:
      "Join us for an in-depth webinar on music theory, covering everything from basic scales to advanced harmonic concepts.",
    link: "https://example.com/webinars/mastering-music-theory",
  },
  {
    title: "Improvisation Techniques",
    description:
      "Learn the art of improvisation in this interactive session, perfect for jazz and contemporary music enthusiasts.",
    link: "https://example.com/webinars/improvisation-techniques",
  },
  {
    title: "Home Recording Basics",
    description:
      "Discover the essentials of setting up a home recording studio and producing high-quality recordings.",
    link: "https://example.com/webinars/home-recording-basics",
  },
  {
    title: "Vocal Training and Health",
    description:
      "Enhance your vocal skills and learn how to maintain vocal health with tips from professional vocal coaches.",
    link: "https://example.com/webinars/vocal-training-health",
  },
  {
    title: "Music Production with Ableton Live",
    description:
      "Dive into music production using Ableton Live, with practical tips and techniques from experienced producers.",
    link: "https://example.com/webinars/music-production-ableton",
  },
  {
    title: "Songwriting Workshop",
    description:
      "Join our songwriting workshop to learn how to craft compelling lyrics and memorable melodies.",
    link: "https://example.com/webinars/songwriting-workshop",
  },
];

function UpcomingEvents() {
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto sm:px-6">
        <div className="text-center">
          <h2 className="text-blue-500 font-semibold text-xl">
            FEATURED WEBINARS
          </h2>
          <p className="text-4xl md:text-4xl sm:text-3xl mt-4">
            {" "}
            Enhance your musical journey
          </p>
        </div>
        <div className="mt-5 md:mt-6">
          <HoverEffect items={upcomingWebinars} />
        </div>
        <div className="mt-5 md:mt-6 text-center">3</div>
      </div>
    </div>
  );
}

export default UpcomingEvents;
