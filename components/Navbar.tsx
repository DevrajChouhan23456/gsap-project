"use client"
import { navLinks } from '@/constants'
import { useGSAP } from '@gsap/react';
import gsap from "gsap"
import React from 'react'

function navbar() {
  useGSAP(()=>{
   const navTween = gsap.timeline({
    scrollTrigger: {
      trigger: "nav",
      start: "bottom top",
    }
   });

   navTween.fromTo("nav",{background:"transparent"},{backgroundColor:"#00000050",backdropFilter:"blur(10px)",duration:1,ease:"power1.inOut"});

  });
  return (
    <nav className="px-5 ">
      <div className=''>
        <a href="#" className="flex gap-2 items-center "> <img src="./images/logo.png" alt="logo"/><p>Home</p></a>
       
        <ul >
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>

  )
}

export default navbar