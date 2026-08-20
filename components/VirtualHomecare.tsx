import React from 'react'

export default function VirtualHomecare(){
  return (
    <div className="card">
      <h3 className="text-xl font-semibold text-sky-800">Atendimentos Virtuais e Homecare</h3>
      <p className="text-slate-600 mt-2">Oferecemos consultas por vídeo para orientações, exercícios terapêuticos e triagem inicial. Para pacientes com mobilidade reduzida, também realizamos atendimento domiciliar (homecare) com protocolos de segurança e higiene.</p>
      <ul className="mt-3 text-slate-600 list-disc list-inside">
        <li>Consulta por vídeo: avaliação, plano de exercícios e acompanhamento.</li>
        <li>Homecare: avaliação funcional, tratamentos manuais e reabilitação no domicílio.</li>
        <li>Agendamento e detalhes discutidos por WhatsApp ou formulário de contato.</li>
      </ul>
    </div>
  )
}
