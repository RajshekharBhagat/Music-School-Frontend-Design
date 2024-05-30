"use client";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import React from "react";

const musicSchoolContent = [
  {
    title: "Experienced Instructors",
    description:
      "Learn from accomplished musicians and educators with years of experience in the industry. Our instructors are dedicated to helping you achieve your musical goals.",
  },
  {
    title: "Comprehensive Curriculum",
    description:
      "Our curriculum covers a wide range of musical genres and skills, from classical to contemporary, ensuring a well-rounded education.",
  },
  {
    title: "State-of-the-Art Facilities",
    description:
      "Practice and perform in our modern, fully-equipped studios and practice rooms, designed to provide the best learning environment.",
  },
  {
    title: "Personalized Learning Plans",
    description:
      "We offer customized lesson plans tailored to each student’s individual needs and skill levels, helping them progress at their own pace.",
  },
];

function WhyChooseUs() {
  return (
    <div className=' mx-auto flex flex-col'>
        <StickyScroll content={musicSchoolContent}>

        </StickyScroll>
    </div>
  )
}

export default WhyChooseUs;
