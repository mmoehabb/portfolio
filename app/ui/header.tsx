'use client'
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

import { 
  Alex_Brush_400, 
  Aboreto_400 
} from "@/app/fonts"

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex flex-col md:flex-row justify-between items-center h-32 py-8 md:px-8 lg:px-24 md:py-0 bg-primary animate__animated animate__fadeInDown">
      <h1 className={`${Alex_Brush_400.className} text-4xl md:text-5xl`}>
        M. E. Abdelsalam
      </h1>
      <div className={`${Aboreto_400.className} flex justify-around lg:justify-between w-80 mt-8 md:mt-0 text-normal md:text-lg`}>
        <Link 
          href="/"
          className={clsx('transition-opacity hover:opacity-100',
            { 'opacity-70': pathname !== "/" }
          )}
        >
          About me
        </Link> 
        <Link 
          href="/publications" 
          className={clsx('transition-opacity hover:opacity-100',
            { 'opacity-70': pathname !== "/publications" }
          )}
        >
            Publications
        </Link> 
      </div>
    </header>
  )
}
