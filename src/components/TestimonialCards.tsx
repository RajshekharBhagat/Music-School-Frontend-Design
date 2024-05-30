"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonial = [
  {
    quote:
      "The instructors at this school are incredible! They have a deep understanding of music and are very patient with students. My playing has improved dramatically since I started taking lessons here.",
    name: "Emily Johnson",
    title: "Student",
  },
  {
    quote:
      "As a parent, I appreciate the personalized approach to teaching. My child is always excited to go to lessons and has developed a real passion for music thanks to the supportive environment.",
    name: "Michael Thompson",
    title: "Parent",
  },
  {
    quote:
      "This music school offers a fantastic range of programs and opportunities. The performance opportunities have given me so much confidence and experience. Highly recommend!",
    name: "Samantha Lee",
    title: "Student",
  },
  {
    quote:
      "Joining this music school has been one of the best decisions I’ve made. The community here is wonderful, and I’ve made lifelong friends and mentors. The facilities are top-notch, too!",
    name: "David Brown",
    title: "Alumnus",
  },
  {
    quote:
      "The comprehensive curriculum and skilled instructors have been instrumental in my musical journey. I feel well-prepared for a future in music, thanks to the education I’ve received here.",
    name: "Jessica Martinez",
    title: "Student",
  },
  {
    quote:
      "The school’s flexible scheduling and affordable tuition made it possible for me to pursue my passion for music despite a busy schedule. I’m grateful for the opportunities I’ve had here.",
    name: "Chris Wilson",
    title: "Adult Learner",
  },
];

function TestimonialCards() {
  return (
    <div className="h-[30rem] md:h-[40rem] w-full dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-xl text-neutral-300 tracking-tight dark:text-neutral-300 mt-2 mb-10 font-bold">Hear our Hormany: Voices of success</h2>
      <div className="flex justify-center w-full overflow-hidden px-4 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={testimonial}
            direction="right"
            speed="slow"
          ></InfiniteMovingCards>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCards;
