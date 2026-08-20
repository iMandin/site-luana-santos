import React from 'react'

const reviews = [
  {name:'Ana', rating:5, text:'Excelente atendimento, recomendo muito!'},
  {name:'Carlos', rating:4, text:'Muito atenciosa e profissional.'},
  {name:'Beatriz', rating:5, text:'Melhorei bastante com o tratamento.'}
]

function Stars({n}:{n:number}){
  return <div className="flex text-yellow-400">{Array.from({length:5}).map((_,i)=> <span key={i} className={i<n? 'opacity-100':'opacity-30'}>★</span>)}</div>
}

export default function RatingsSection(){
  const avg = (reviews.reduce((s,r)=>s+r.rating,0)/reviews.length).toFixed(1)
  return (
    <section className="mt-12">
      <div className="flex items-center gap-6">
        <div className="bg-white rounded-2xl p-6 shadow">
          <div className="text-3xl font-bold">{avg}</div>
          <div className="text-sm text-slate-600">Avaliação média</div>
          <Stars n={Math.round(Number(avg))} />
        </div>
        <div className="grid gap-3">
          {reviews.map((r,idx)=> (
            <div key={idx} className="bg-white p-4 rounded-xl shadow">
              <div className="flex items-center justify-between">
                <div className="font-semibold">{r.name}</div>
                <Stars n={r.rating} />
              </div>
              <div className="text-slate-600 mt-2">{r.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
