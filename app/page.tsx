import Image from "next/image";
import Link from "next/link"

import PublicationCard from "@/components/publication-card";

import { STRINGS } from "@/app/strings";
import { getPublicationsByCategory } from "@/app/lib/data";
import ProfilePic from "@/public/portrait.jpg";

export default function Home() {
  return (
    <main className={'bg-secondary'}>
      <section className={"flex flex-col lg:flex-row bg-primary text-neutral py-16"}>

        <div className="flex flex-2 flex-col items-center px-24 animate__animated animate__fadeIn animate__delay-1s">
          <div className="avatar">
            <div className="mask mask-squircle w-72">
              <Image
                src={ProfilePic}
                alt="personal portrait image"
              />
            </div>
          </div>
          <h1 className="w-screen lg:w-auto text-center text-4xl lg:text-5xl mt-12">
            Software Developer
          </h1>
        </div>
        
        <div className="flex-1 px-8 md:px-16 py-24 lg:p-0 animate__animated animate__fadeIn animate__delay-2s">
          <div className="relative mb-4">
            <h1 className="text-4xl">
              WHO I AM
            </h1>
            <span className="absolute w-10 h-0.5 mt-0.5 bg-neutral"></span>
          </div>
          <article className="text-lg p-0 lg:pr-24 text-pretty text-justify opacity-80">
            { STRINGS.paragraphs.aboutme.split("\n").map((para, i) => <p key={i}>{para}</p>) }
          </article>
        </div>
      </section>

      <section className={"flex flex-col items-center bg-secondary text-primary py-24 md:py-32 px-4"}>
        <div className="w-full max-w-7xl">
          <div className="relative mb-12">
            <h1 className="text-4xl md:text-5xl">
              Latest Applications
            </h1>
            <span className="absolute w-10 h-0.5 mt-0.5 bg-primary"></span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {getPublicationsByCategory("Applications", 3).map((pub, i) => (
              <PublicationCard key={i} publication={pub}/>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/publications?category=Applications" className="text-accent hover:underline transition">
              View all applications →
            </Link>
          </div>
        </div>
      </section>

      <section className={"flex flex-col items-center bg-secondary text-primary pb-24 md:pb-32 px-4"}>
        <div className="w-full max-w-7xl">
          <div className="relative mb-12">
            <h1 className="text-4xl md:text-5xl">
              Latest Articles
            </h1>
            <span className="absolute w-10 h-0.5 mt-0.5 bg-primary"></span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {getPublicationsByCategory("Writings", 3).map((pub, i) => (
              <PublicationCard key={i} publication={pub}/>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/publications?category=Writings" className="text-accent hover:underline transition">
              View all articles →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
