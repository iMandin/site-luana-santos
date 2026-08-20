import './globals.css'
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Luana Santos - Fisioterapia em Uberlândia',
  description: 'Atendimento em fisioterapia com foco em reabilitação, pilates e terapia manual.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0277bd" />
        <meta name="description" content="Atendimento em fisioterapia com foco em reabilitação, pilates e terapia manual em Uberlândia." />

        {/* Open Graph */}
        <meta property="og:title" content="Dra. Luana Santos — Fisioterapia em Uberlândia" />
        <meta property="og:description" content="Atendimento em fisioterapia: reabilitação, pilates clínico e terapia manual." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:url" content="https://example.com" />
        <meta property="og:image" content="/images/hero.svg" />

        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <Header />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
