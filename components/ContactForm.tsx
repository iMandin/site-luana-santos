"use client"
import React, { useState } from 'react'

export default function ContactForm(){
  const [form, setForm] = useState({name:'', email:'', phone:'', subject:'', type:'Presencial', date:'', time:'', message:''})

  function update<K extends keyof typeof form>(k:K, v:string){
    setForm(prev=>({ ...prev, [k]: v }))
  }

  function handleSubmit(e: React.FormEvent){
    e.preventDefault()
    const body = encodeURIComponent(`Nome: ${form.name}\nEmail: ${form.email}\nTelefone: ${form.phone}\nTipo: ${form.type}\nData: ${form.date} ${form.time}\n\n${form.message}`)
    window.location.href = `mailto:luana.santos@example.com?subject=${encodeURIComponent(form.subject || 'Contato via site')}&body=${body}`
  }

  return (
    <form onSubmit={handleSubmit} aria-label="formulario-contato" className="space-y-3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <input className="p-3 border rounded-xl shadow-sm" placeholder="Seu nome" value={form.name} onChange={e=>update('name', e.target.value)} required />
        <input className="p-3 border rounded-xl shadow-sm" placeholder="Seu email" type="email" value={form.email} onChange={e=>update('email', e.target.value)} required />
        <input className="p-3 border rounded-xl shadow-sm" placeholder="Telefone" value={form.phone} onChange={e=>update('phone', e.target.value)} />
        <input className="p-3 border rounded-xl shadow-sm" placeholder="Assunto" value={form.subject} onChange={e=>update('subject', e.target.value)} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <select className="p-3 border rounded-xl shadow-sm" value={form.type} onChange={e=>update('type', e.target.value)}>
          <option>Presencial</option>
          <option>Virtual</option>
          <option>Homecare</option>
        </select>
        <input className="p-3 border rounded-xl shadow-sm" type="date" value={form.date} onChange={e=>update('date', e.target.value)} />
        <input className="p-3 border rounded-xl shadow-sm" type="time" value={form.time} onChange={e=>update('time', e.target.value)} />
      </div>

      <textarea className="w-full p-3 border rounded-xl shadow-sm" placeholder="Mensagem (descreva sintomas / objetivos)" rows={5} value={form.message} onChange={e=>update('message', e.target.value)} />

      <div className="flex items-center gap-3">
        <button className="bg-sky-600 text-white px-5 py-3 rounded-lg" type="submit">Enviar</button>
        <button type="button" onClick={()=>{setForm({name:'', email:'', phone:'', subject:'', type:'Presencial', date:'', time:'', message:''})}} className="px-4 py-2 border rounded-lg">Limpar</button>
      </div>
    </form>
  )
}
