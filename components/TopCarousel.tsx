"use client"
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const slides = ['/images/pilates1.jpg','/images/pilates2.jpg','/images/pilates3.png']

export default function TopCarousel(){
  const [i,setI] = useState(0)
  useEffect(()=>{
    const t = setInterval(()=> setI(v=> (v+1)%slides.length), 3500)
    return ()=> clearInterval(t)
  },[])

  return (
    <div className="mb-6 rounded-2xl overflow-hidden shadow-lg">
      <div className="relative h-56 md:h-72 bg-white">
        <AnimatePresence mode="wait">
          <motion.img key={i} src={slides[i]} alt={`pilates-slide-${i}`} className="w-full h-full object-cover carousel-img" initial={{opacity:0,x:20}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-20}} transition={{duration:0.6}} />
        </AnimatePresence>
        <div className="absolute left-4 bottom-4 bg-white/60 py-2 px-3 rounded-xl backdrop-blur">
          <div className="font-semibold text-sky-800">Dra. Luana Santos</div>
          <div className="text-sm text-slate-700">Atendimento presencial, virtual e homecare</div>
        </div>
      </div>
    </div>
  )
}
