import React from 'react'
import ServiceCard from './ServiceCard'

const items = [
  {title:'Buscar profissional', desc:'Encontre profissionais especialistas e agendamentos com facilidade.', icon:'/images/service-1.svg'},
  {title:'Farmácia Online', desc:'Receitas e orientações para aquisição de materiais e medicamentos.', icon:'/images/service-2.svg'},
  {title:'Consultas', desc:'Atendimentos presenciais e virtuais com acompanhamento completo.', icon:'/images/service-3.svg'},
  {title:'Informações', desc:'Orientações, prevenção e materiais educativos para pacientes.', icon:'/images/service-1.svg'},
  {title:'Emergência', desc:'Encaminhamentos e orientações iniciais em casos agudos.', icon:'/images/service-2.svg'},
  {title:'Acompanhamento', desc:'Plano de tratamento e monitoramento de evolução.', icon:'/images/service-3.svg'},
]

export default function ServicesGrid(){
  return (
    <section className="mt-12">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-semibold text-sky-800">Nossos serviços</h2>
          <p className="text-slate-600 mt-2">Oferecemos serviços personalizados e cuidados com profissionais especializados para sua reabilitação e bem-estar.</p>
        </div>
        <div>
          <button className="px-4 py-2 border rounded-full text-sky-700">Saiba mais</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((it,idx)=> (
          <ServiceCard key={idx} title={it.title} desc={it.desc} icon={it.icon} />
        ))}
      </div>
    </section>
  )
}
