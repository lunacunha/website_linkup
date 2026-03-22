'use client'
import React from 'react'

const Beliefs = () => {
  return (
    <section className='overflow-hidden py-12 lg:py-16'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10'>
          {/* COLUMN-1 */}
          <div className='rounded-[2rem] border border-[#24585c]/20 bg-[#24585c] px-8 py-12 sm:px-12 sm:py-14 lg:px-14 lg:py-16'>
            <p className='mb-8 text-center text-sm font-semibold uppercase tracking-[0.22em] text-white/70 sm:text-start'>
              PROPÓSITO
            </p>

            <h3 className='mx-auto max-w-md text-center text-[2rem] leading-tight text-white sm:mx-0 sm:text-start lg:text-[2.35rem]'>
              Ligar estudantes ao mercado.
            </h3>

            <p className='mx-auto mt-10 max-w-lg text-center text-lg leading-8 text-white/78 sm:mx-0 sm:text-start'>
              O Nurture Program reduz a distância entre o percurso académico e
              as oportunidades reais, criando acompanhamento contínuo ao longo
              do tempo.
            </p>
          </div>

          {/* COLUMN-2 */}
          <div className='flex items-center rounded-[2rem] border border-[#d8d1c3] bg-[#fffdf9] px-8 py-12 sm:px-12 sm:py-14 lg:px-14 lg:py-16'>
            <div className='w-full'>
              <p className='mb-8 text-center text-sm font-semibold uppercase tracking-[0.22em] text-[#c26b3c] sm:text-start'>
                IMPACTO
              </p>

              <h3 className='mx-auto max-w-md text-center text-[1.85rem] leading-tight text-black sm:mx-0 sm:text-start lg:text-[2.1rem]'>
                Experiências reais criam clareza.
              </h3>

              <p className='mx-auto mt-10 max-w-lg text-center text-lg leading-8 text-black/68 sm:mx-0 sm:text-start'>
                Com conteúdos relevantes, contacto com empresas e iniciativas
                práticas, o programa ajuda cada participante a ganhar clareza,
                competências e proximidade ao mercado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Beliefs
