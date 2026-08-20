"use client"
import React from 'react'
import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <motion.section initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="rounded-xl p-8 flex flex-col md:flex-row items-center gap-8 card hero">
      <motion.div className="flex-1" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.1}}>
        <h1 className="text-3xl md:text-4xl font-bold brand-title">Dra. Luana Santos</h1>
        <p className="mt-3 text-slate-600">Fisioterapeuta em Uberlândia — reabilitação, pilates clínico e terapia manual. Atendimento presencial, homecare e virtual.</p>
        <div className="mt-6 flex gap-3">
          <a href="#contact" className="inline-block cta-btn cta-primary px-5 py-3 rounded-lg shadow hover:scale-[1.02] transition">Agende uma avaliação</a>
          <a href="#services" className="inline-block cta-secondary px-4 py-3 rounded-lg">Conheça os serviços</a>
        </div>
      </motion.div>
      <motion.div className="w-56 h-56 rounded-lg overflow-hidden shadow-lg flex-shrink-0" animate={{y:[0,-8,0]}} transition={{duration:4, repeat:Infinity, ease:'easeInOut'}}>
        <img src="/images/luana.jpg" alt="Dra. Luana Santos" className="w-full h-full object-cover hero-image" onError={(e)=>{(e.currentTarget as HTMLImageElement).src='/images/hero.svg'}} />
      </motion.div>
    </motion.section>
  )
}
