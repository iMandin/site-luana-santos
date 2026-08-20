import Link from 'next/link'
import React from 'react'

export default function Header(){
  return (
    <header className="site-header">
      <div className="container site-nav">
        <div className="site-brand">Dra. Luana Santos</div>
        <nav style={{marginLeft:'auto'}} className="site-nav-links">
          <Link href="#about">Sobre</Link>
          <Link href="#services">Serviços</Link>
          <Link href="#contact">Contato</Link>
        </nav>
      </div>
    </header>
  )
}
