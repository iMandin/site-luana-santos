"use client"
import React, { useState } from 'react'

const faqs = [
  {q:'Como agendar uma consulta?', a:'Você pode agendar pelo formulário, WhatsApp ou email. Escolha data e hora preferida.'},
  {q:'Vocês atendem em domicílio?', a:'Sim, oferecemos serviço de homecare com agendamento prévio e avaliação de necessidade.'},
  {q:'Como funcionam as consultas virtuais?', a:'As consultas virtuais são realizadas por vídeo para avaliação, orientação e acompanhamento de exercícios.'},
  {q:'Quais formas de pagamento?', a:'Aceitamos PIX, transferência e pagamento em dinheiro no atendimento presencial.'}
]

export default function FAQAccordion(){
  const [open,setOpen] = useState<number | null>(0)
  return (
    <section className="mt-12">
      <h3 className="text-2xl font-semibold text-sky-800 mb-4">Perguntas Frequentes</h3>
      <div className="space-y-3">
        {faqs.map((f,idx)=> (
          <div key={idx} className="bg-white shadow rounded-xl overflow-hidden">
            <button onClick={()=> setOpen(open===idx? null: idx)} className="w-full text-left p-4 flex items-center justify-between">
              <div>
                <div className="font-medium">{f.q}</div>
              </div>
              <div className="text-sky-600">{open===idx? '−':'+'}</div>
            </button>
            {open===idx && (
              <div className="p-4 border-t text-slate-600">{f.a}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
