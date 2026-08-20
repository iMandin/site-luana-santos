"use client"
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {name:'Paciente Satisfeito', role:'Paciente', text:'O acompanhamento foi excelente e as orientações muito claras — tive ótima evolução no tratamento.'},
  {name:'Maria Silva', role:'Paciente', text:'Excelente acompanhamento e atenção durante todo o tratamento. Recomendo!'},
  {name:'João Pereira', role:'Paciente', text:'Atendimento por vídeo prático e eficiente — resolvi minhas dúvidas sem sair de casa.'}
]

export default function TestimonialCarousel(){
  const [i,setI] = useState(0)
  useEffect(()=>{
    const t = setInterval(()=> setI(v=> (v+1)%testimonials.length), 5000)
    return ()=> clearInterval(t)
  },[])

  const cur = testimonials[i]
  return (
    <section className="mt-12">
      <div className="rounded-2xl p-8 shadow-xl testimonial-gradient text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-xl font-semibold mb-2">Depoimentos</h3>
          <AnimatePresence mode="wait">
            <motion.div key={i} initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}} transition={{duration:0.6}} className="mt-3">
              "{cur.text}"
              <div className="mt-6 flex items-center justify-center gap-4">
                <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">{cur.name.charAt(0)}</div>
                <div className="text-left">
                  <div className="font-semibold">{cur.name}</div>
                  <div className="text-sm opacity-90">{cur.role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
