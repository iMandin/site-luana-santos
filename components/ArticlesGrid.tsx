import React from 'react'

const articles = [
  {title:'Benefícios do Pilates na reabilitação', img:'/images/service-1.svg'},
  {title:'Cuidados naturais e bem-estar', img:'/images/service-2.svg'},
  {title:'Cuidados preventivos para a saúde musculoesquelética', img:'/images/service-3.svg'},
]

export default function ArticlesGrid(){
  return (
    <section className="mt-12">
      <h3 className="text-2xl font-semibold text-sky-800 mb-4">Últimos artigos</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((a,idx)=> (
          <article key={idx} className="bg-white rounded-xl shadow p-4 gold-sweep">
            <img src={a.img} alt="thumb" className="w-full h-40 object-cover rounded" />
            <h4 className="mt-3 font-semibold">{a.title}</h4>
            <p className="text-sm text-slate-600 mt-2">Artigo introdutório com dicas práticas e orientações para cuidados diários.</p>
            <a className="text-sky-600 mt-2 inline-block">Leia mais →</a>
          </article>
        ))}
      </div>
    </section>
  )
}
