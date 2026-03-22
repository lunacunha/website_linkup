'use client'
import React from 'react'

const Beliefs = () => {
  return (
    <section className='overflow-hidden py-12 lg:py-16'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
          {/* COLUMN-1 */}
          <div className='rounded-[1.9rem] border border-slate-200 bg-[#0d1b4d] px-8 py-12 sm:px-12 sm:py-14 lg:px-14 lg:py-16'>
            <p className='mb-6 text-sm font-semibold uppercase tracking-[0.22em] text-center text-white/70 sm:text-start'>
              PROPÓSITO
            </p>

            <h3 className='mx-auto max-w-md text-center text-white leading-tight sm:mx-0 sm:text-start'>
              Aproximar estudantes, conhecimento e mercado.
            </h3>

            <p className='mx-auto mt-8 max-w-lg text-center text-lg leading-8 text-white/78 sm:mx-0 sm:text-start'>
              O Nurture Program reduz a distância entre o percurso académico e
              as oportunidades reais, criando acompanhamento contínuo ao longo
              do tempo.
            </p>
          </div>

          {/* COLUMN-2 */}
          <div className='rounded-[1.9rem] border border-emerald-100 bg-emerald-50 px-8 py-12 sm:px-12 sm:py-14 lg:px-14 lg:py-16'>
            <p className='mb-6 text-sm font-semibold uppercase tracking-[0.22em] text-center text-primary/80 sm:text-start'>
              IMPACTO
            </p>

            <h3 className='mx-auto max-w-md text-center text-black leading-tight sm:mx-0 sm:text-start'>
              Criar experiências reais que orientam decisões.
            </h3>

            <p className='mx-auto mt-8 max-w-lg text-center text-lg leading-8 text-black/72 sm:mx-0 sm:text-start'>
              Com conteúdos relevantes, contacto com empresas e iniciativas
              práticas, o programa ajuda cada participante a ganhar clareza,
              competências e proximidade ao mercado.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Beliefs
