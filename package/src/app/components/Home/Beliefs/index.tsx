'use client'
import React from 'react'

const Beliefs = () => {
  return (
    <section className='overflow-hidden py-10 lg:py-14'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='grid grid-cols-1 gap-5 lg:grid-cols-2'>
          {/* COLUMN-1 */}
          <div className='rounded-[1.75rem] border border-slate-200 bg-[#0d1b4d] px-8 pb-14 pt-12 sm:px-14'>
            <p className='text-sm font-semibold text-white/70 tracking-[0.22em] mb-5 text-center sm:text-start uppercase'>
              propósito
            </p>

            <h3 className='text-white mb-5 text-center sm:text-start leading-tight'>
              Aproximar{' '}
              <span className='text-white/70'>
                estudantes, conhecimento e mercado de trabalho.
              </span>
            </h3>

            <p className='text-lg leading-8 text-white/78 pt-2 text-center sm:text-start'>
              O Nurture Program nasce para reduzir a distância entre o percurso
              académico e as oportunidades reais, criando um acompanhamento
              contínuo que ajuda os estudantes a ganhar clareza, experiência e
              confiança no seu futuro profissional.
            </p>
          </div>

          {/* COLUMN-2 */}
          <div>
            <div className='rounded-[1.75rem] border border-emerald-100 bg-emerald-50 px-8 pb-14 pt-12 sm:px-14'>
              <p className='text-sm font-semibold text-primary/80 tracking-[0.22em] mb-5 text-center sm:text-start uppercase'>
                impacto
              </p>

              <h3 className='text-black mb-5 text-center sm:text-start leading-tight'>
                <span className='text-primary'>Criar experiências reais</span>{' '}
                que orientam decisões mais conscientes.
              </h3>

              <p className='pt-2 text-center sm:text-start text-black/72 text-lg leading-8'>
                Através de conteúdos relevantes, contacto com empresas,
                iniciativas práticas e momentos de proximidade com o ecossistema
                profissional, o programa ajuda cada participante a desenvolver
                competências e a aproximar-se das oportunidades certas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Beliefs
