"use client";
import Link from "next/link";
import courseData from "../data/music_courses.json";
import { Course } from "@/types/types";
import { BackgroundGradient } from "./ui/background-gradient";

function FeaturedCourses() {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );
  return (
    <div className="py-7 md:py-12 bg-gray-900 flex flex-col items-center gap-2">
      <div className="text-center">
        <h2 className="text-blue-500 font-semibold text-xl">
          FEATURED COURSES
        </h2>
        <p className="text-4xl md:text-5xl ">Learn with the best</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center my-10 px-10">
        {featuredCourses.map((course: Course) => (
          <div key={course.id} className="flex justify-evenly">
            <BackgroundGradient className="rounded-[22px] h-full max-w-sm px-4 py-12 bg-white dark:bg-zinc-900 overflow-hidden flex flex-col">
              <div className="flex flex-col items-center text-center flex-grow">
                <p className="text-lg sm:text-xl mt-4 mb-2 text-black dark:text-neutral-300">
                  {course.title}
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow mb-5">
                  {course.description}
                </p>
                <Link href={`/courses/${course.slug}`}>Learn More</Link>
              </div>
            </BackgroundGradient>
          </div>
        ))}
      </div>
      <div>
        <Link
          href={"/courses"}
          className="py-3 px-2 bg-gray-950 rounded-lg hover:bg-black text-neutral-400 dark:text-neutral-300 hover:animate-pulse cursor-pointer shadow-gray-800 shadow-lg"
        >
          View All Courses
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCourses;
