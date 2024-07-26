import Image from "next/image";
import Link from "next/link"

import PublicationCard from "@/components/publication-card";

import { STRINGS } from "@/app/strings";
import { Pubs } from "@/app/lib/data";
import ProfilePic from "@/public/portrait.jpg";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";

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

      <section className={"flex flex-col items-center bg-secondary text-primary py-24 md:p-32"}>
        <h1 className="mb-6 md:mb-12 text-4xl md:text-5xl">
          Latest Publications
        </h1>  
        <div className="flex flex-wrap md:flex-col lg:flex-row justify-center items-center w-full">
            {[Pubs[0], Pubs[1]].map((pub, i) => (
              <PublicationCard key={i} publication={pub}/>
            ))}
            <Link href="/publications" className="transition w-16 text-accent hover:translate-x-2">
              <EllipsisHorizontalIcon />
            </Link>
        </div>
      </section>
    </main>
  );
}
