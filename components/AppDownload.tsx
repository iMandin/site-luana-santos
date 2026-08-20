import React from 'react'

export default function AppDownload(){
  return (
    <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <h3 className="text-2xl font-semibold text-sky-800">Baixe nossos aplicativos</h3>
        <p className="text-slate-600 mt-2">Acompanhe exercícios, agendamentos e orientações pelo aplicativo e portal online.</p>
        <div className="mt-4 flex gap-3">
          <a className="px-4 py-2 bg-sky-600 text-white rounded-lg">Baixar na App Store</a>
          <a className="px-4 py-2 border rounded-lg">Disponível no Google Play</a>
        </div>
      </div>
      <div className="flex justify-center">
        <img src="/images/hero.svg" alt="aplicativo" className="w-72 h-48 object-contain rounded-lg shadow" />
      </div>
    </section>
  )
}
