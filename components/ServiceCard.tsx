"use client"
import React from 'react'
import { motion } from 'framer-motion'

export default function ServiceCard({title,desc,icon}:{title:string,desc:string,icon:string}){
  return (
    <motion.div whileHover={{scale:1.02}} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition gold-sweep">
      <div className="flex items-center gap-4">
        <img src={icon} alt="icon" className="w-20 h-20" />
        <div>
          <div className="font-semibold text-lg brand-title">{title}</div>
          <div className="text-sm text-slate-600 mt-1">{desc}</div>
        </div>
      </div>
    </motion.div>
  )
}
