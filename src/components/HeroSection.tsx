import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 bg-dot-white/[0.2]">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 relative space-y-3 md:space-y-5 z-10 w-full text-center">
        <h1
          className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold
         bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400
            "
        >
          Master the arts of music
        </h1>
        <p className="max-w-lg text-base md:text-lg text-neutral-300 mx-auto mt">
          Dive into our comprehensive music course and transform your musical
          journey today. whether you're a beginner or looking to refine your
          skill, know us to unlock your true potential.
        </p>
        <div className="mt-4">
          <Link href={"/courses"}><Button>Explore courses</Button></Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
