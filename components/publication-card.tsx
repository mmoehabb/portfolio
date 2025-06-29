'use client'

import Image from "next/image"
import { Publication } from "@/app/lib/data"
import { useState, useEffect } from "react"
import clsx from "clsx"

export default function PublicationCard({ publication }: { publication: Publication }) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(false)
  }, [publication.imgsrc])

  return (
    <div className="card bg-neutral h-[550px] w-96 mx-4 my-8 md:my-12 shadow rounded-lg overflow-hidden transition lg:hover:scale-105 hover:shadow-xl">
      <a href={publication.link} className="relative max-h-52 overflow-hidden">
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
