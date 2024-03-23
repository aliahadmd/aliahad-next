import { Spotlight } from "@/app/components/ui/Spotlight";
import { HoverEffect } from "@/app/components/ui/card-hover-effect";
import Link from "next/link";
import { projects } from "@/app/utils/projects";
import { LampDemo } from "@/app/components/lamp";



export default function Home() {
  return (
    <>
      <div className="h-[40rem] w-full flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Ali Ahad
          </h1>
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            Full Stack Developer | Instructor
            <br />
            <Link href="mailto:ali@aliahad.com" className="px-1 underline">
              @email
            </Link>
            <Link
              href="https://github.com/aliahadmd"
              className="px-1 underline"
            >
              @github
            </Link>
            <Link
              href="https://linkedin.com/in/aliahadmd"
              className="px-1 underline"
            >
              @linkedIn
            </Link>
          </p>
        </div>
      </div>

      {/* portfolio part */}
      <div className="h-full w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        <div className="max-w-5xl mx-auto px-8">
          <HoverEffect items={projects} />
        </div>
      </div>
      <LampDemo />
    </>
  );
}
