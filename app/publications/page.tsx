'use client'

import Link from "next/link"
import { useSearchParams } from "next/navigation"
import clsx from "clsx"

import PublicationCard from "@/components/publication-card";
import { CATEGORIES, Pubs } from "@/app/lib/data"

export default function Publications() {
  const searchParams = useSearchParams()
  const category = searchParams.get("category") || CATEGORIES[0] 

  return (
    <main className="bg-secondary">
      <nav className="flex flex-row justify-center items-center h-20 text-xl bg-primary">
        {CATEGORIES.map((cat, i) => (
          <Link 
            key={i}
            href={`/publications?category=${cat}`}
            className={clsx('mx-12 transition-opacity hover:opacity-100',
              { 'opacity-70': category !== cat },
              { 'text-2xl': category === cat }
            )}
          >
            {cat} 
          </Link> 
        ))}
      </nav>
      <section className="flex flex-wrap p-24 text-primary">
        {Pubs.filter(pub => category ? pub.category[0] == category : true).map((pub, i) => (
          <PublicationCard key={i} publication={pub}/>
        ))}
      </section>
    </main>
  )
}
