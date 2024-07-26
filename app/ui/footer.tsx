'use client'
import Image from 'next/image'

import LinkedinPic from '@/public/profiles/linkedin.png'
import TwitterPic from '@/public/profiles/x.png'
import DevPic from '@/public/profiles/dev.png'
import GithubPic from '@/public/profiles/github.png'

export default function Footer() {
  return (
    <footer className="flex flex-col justify-between items-center pt-20 h-[50vh] bg-base-100">
      <h1 className="underline underline-offset-8 text-3xl">PROFILES</h1>
      <div className="flex flex-row justify-between md:w-3/4 lg:w-1/2">
        <a href="https://www.linkedin.com/in/mo-ehab/" className="mx-4">
          <Image 
            src={LinkedinPic}
            alt="linkedin profile pressable image"
          /> 
        </a>
        <a href="https://x.com/_MoEhab" className="mx-4">
          <Image 
            src={TwitterPic}
            alt="twitter profile pressable image"
          /> 
        </a> 
        <a href="https://dev.to/_moehab" className="mx-4">
          <Image 
            src={DevPic}
            alt="dev.to profile pressable image"
          /> 
        </a> 
        <a href="https://github.com/Mahmoud-Ehab" className="mx-4">
          <Image 
            src={GithubPic}
            alt="github profile pressable image"
          /> 
        </a> 
      </div>
      <div className="w-full h-4 bg-accent"></div>
    </footer>
  )
}
