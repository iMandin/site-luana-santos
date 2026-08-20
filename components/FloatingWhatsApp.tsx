"use client"
import React from 'react'
import { motion } from 'framer-motion'

export default function FloatingWhatsApp(){
  const number = '5534999999999' // replace with real number
  const text = encodeURIComponent('Olá, gostaria de agendar uma consulta.')
  return (
    <a href={`https://wa.me/${number}?text=${text}`} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="fixed right-6 bottom-6 z-50">
      <motion.div animate={{y:[0,-8,0]}} transition={{duration:1.8, repeat:Infinity}} className="bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.97-4.03 9-9 9a9 9 0 01-4.95-1.53L3 21l1.53-3.06A9 9 0 013 12c0-4.97 4.03-9 9-9s9 4.03 9 9z" />
        </svg>
      </motion.div>
    </a>
  )
}
