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
    <header className="flex flex-row justify-between items-center h-32 px-24 bg-primary">
      <h1 className={`${Alex_Brush_400.className} text-5xl`}>
        M. E. Abdelsalam
      </h1>
      <div className={`${Aboreto_400.className} flex justify-between w-80 text-lg`}>
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
