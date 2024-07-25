import Image from "next/image";
import Link from "next/link"

import PublicationCard from "@/components/publication-card";

import { STRINGS } from "@/app/strings";
import { Pubs } from "@/app/lib/data";
import ProfilePic from "@/public/portrait.jpg";
import { ForwardIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <main className={'bg-secondary'}>
      <section className={"flex flex-row bg-primary text-neutral py-16"}>

        <div className="flex flex-2 flex-col items-center px-24">
          <div className="avatar">
            <div className="mask mask-squircle ">
              <Image
                src={ProfilePic}
                width={250}
                alt="personal portrait image"
              />
            </div>
          </div>
          <h1 className="text-5xl mt-12">
            Software Developer
          </h1>
        </div>
        
        <div className="flex-1">
          <div className="relative mb-4">
            <h1 className="text-4xl">
              WHO I AM
            </h1>
            <span className="absolute w-10 h-0.5 mt-0.5 bg-neutral"></span>
          </div>
          <article className="text-lg pr-24 text-justify opacity-80">
            { STRINGS.paragraphs.aboutme.split("\n").map((para, i) => <p key={i}>{para}</p>) }
          </article>
        </div>
      </section>

      <section className={"flex flex-col items-center bg-secondary text-primary p-32"}>
        <h1 className="mb-12 text-5xl">
          Latest Publications
        </h1>  
        <div className="flex flex-row justify-center items-center w-full">
            {[Pubs[0], Pubs[1]].map((pub, i) => (
              <PublicationCard key={i} publication={pub}/>
            ))}
            <Link href="/publications" className="transition w-12 text-accent hover:translate-x-2">
              <ForwardIcon />
            </Link>
        </div>
      </section>
    </main>
  );
}
