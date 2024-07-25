import Image from "next/image"
import { Publication } from "@/app/lib/data"
import { Suspense } from "react"

export default function PublicationCard({ publication }: { publication: Publication }) {
  return (
    <div className="card bg-neutral min-h-[500px] w-96 m-12 shadow-xl rounded-lg overflow-hidden transition hover:scale-125 hover:shadow-2xl">
      <a href={publication.link}>
        <Suspense fallback={<div className="skeleton h-32 w-32"></div>}>
          <Image 
            src={publication.imgsrc}
            width={500}
            height={500}
            alt={`${publication.title} image`}
          />
        </Suspense>
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
