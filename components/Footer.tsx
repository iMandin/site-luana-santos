import React from 'react'

export default function Footer(){
  return (
    <footer className="footer footer-gradient">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="font-semibold">Dra. Luana Santos</div>
            <div className="text-sm opacity-90">Fisioterapia • Uberlândia</div>
          </div>
          <div className="text-sm opacity-90">© {new Date().getFullYear()} • Atendimento por agendamento • Instagram @luanasantosfisio</div>
        </div>
      </div>
    </footer>
  )
}
