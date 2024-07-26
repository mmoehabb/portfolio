'use client'

import Image from "next/image"
import { Publication } from "@/app/lib/data"
import { useState } from "react"
import clsx from "clsx"

export default function PublicationCard({ publication }: { publication: Publication }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="card bg-neutral min-h-[500px] w-96 m-12 shadow-xl rounded-lg overflow-hidden transition hover:scale-125 hover:shadow-2xl">
      <a href={publication.link} className="relative">
        <div className={clsx(
          "absolute flex justify-center items-center h-full w-full bg-neutral transition", 
          "animate__fadeOut animate__delay-1s",
          {"animate__animated": loaded === true
        })}>
          <span className={clsx("loading loading-spinner loading-lg", {"hidden": loaded === true})}></span>
        </div>
        <Image 
          src={publication.imgsrc}
          width={500}
          height={500}
          alt={`${publication.title} image`}
          onLoad={() => setLoaded(true)}
        />
      </a>
      <div className="card-body">
        <h2 className="card-title">
          {publication.title} 
          <div className="badge badge-secondary hidden">NEW</div>
        </h2>
        <p className="text-justify">{publication.desc}</p>
        <div className="card-actions justify-end">
          {publication.tags.map((tag, i) => (
            <div key={i} className="badge badge-outline">{tag}</div>
          ))}
        </div>
      </div>
    </div>
  )
}
