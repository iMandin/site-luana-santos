import React from 'react'
import ContactForm from '../components/ContactForm'
import Hero from '../components/Hero'
import VirtualHomecare from '../components/VirtualHomecare'
import FloatingWhatsApp from '../components/FloatingWhatsApp'
import ServicesGrid from '../components/ServicesGrid'
import TestimonialCarousel from '../components/TestimonialCarousel'
import AppDownload from '../components/AppDownload'
import ArticlesGrid from '../components/ArticlesGrid'
import TopCarousel from '../components/TopCarousel'
import FAQAccordion from '../components/FAQAccordion'
import RatingsSection from '../components/RatingsSection'

export default function Home() {
  return (
    <section>
      <TopCarousel />
      <Hero />

      <section id="about" className="mt-6">
        <div className="card">
          <h2 className="text-2xl font-semibold brand-title">Sobre</h2>
          <p className="text-slate-600 mt-2">A Dra. Luana Santos é fisioterapeuta formada e especializada em reabilitação musculoesquelética. Atua com atendimento individualizado, avaliação funcional, pilates clínico e terapia manual para tratamentos preventivos e pós-lesão.</p>
        </div>
      </section>

      <ServicesGrid />

      <AppDownload />

      <TestimonialCarousel />

      <ArticlesGrid />

      <section className="mt-6">
        <VirtualHomecare />
      </section>

      <FAQAccordion />

      <RatingsSection />

      <section id="contact" className="mt-6">
        <h2 className="text-2xl font-semibold mb-2 brand-title">Contato</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card">
            <p className="text-slate-600">Agende sua consulta ou tire dúvidas pelos contatos abaixo:</p>
            <ul className="mt-3 text-slate-600 list-disc list-inside">
              <li>Email: luana.santos@example.com</li>
              <li>WhatsApp: (34) 9 9999-9999</li>
              <li>Endereço: Uberlândia - MG (atendimento por agendamento)</li>
            </ul>
          </div>
          <div className="card">
            <ContactForm />
          </div>
        </div>
      </section>

      <FloatingWhatsApp />
    </section>
  )
}
