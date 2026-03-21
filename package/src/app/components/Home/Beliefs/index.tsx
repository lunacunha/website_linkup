'use client'
import React from 'react'
import Link from 'next/link'

const Beliefs = () => {
  return (
    <section className='bg-cover bg-center overflow-hidden py-10 lg:py-16'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
          {/* COLUMN-1 */}
          <div className="bg-purple pt-12 px-10 sm:px-24 pb-20 rounded-3xl bg-[url('/images/beliefs/swirls.svg')] bg-no-repeat bg-right-bottom">
            <p className='text-lg font-normal text-white tracking-widest mb-5 text-center sm:text-start uppercase'>
              propósito
            </p>

            <h3 className='text-white mb-5 text-center sm:text-start'>
              Aproximar{' '}
              <span className='text-white/70'>
                estudantes, conhecimento e mercado de trabalho.
              </span>
            </h3>

            <p className='text-lg text-white/80 pt-2 mb-10 text-center sm:text-start'>
              O Nurture Program nasce para reduzir a distância entre o percurso
              académico e as oportunidades reais, criando um acompanhamento
              contínuo que ajuda os estudantes a ganhar clareza, experiência e
              confiança no seu futuro profissional.
            </p>

            <div className='text-center sm:text-start'>
              <Link
                href='#About'
                className='text-xl py-4 px-10 mt-5 inline-block font-semibold text-white rounded-full duration-300 bg-primary border border-primary hover:bg-darkmode hover:border-darkmode'>
                Saber mais
              </Link>
            </div>
          </div>

          {/* COLUMN-2 */}
          <div>
            <div className="bg-[#D6FFEB] pt-12 px-10 sm:px-24 pb-20 rounded-3xl bg-[url('/images/beliefs/bg.svg')] bg-no-repeat bg-bottom">
              <p className='text-lg font-normal text-primary tracking-widest mb-5 text-center sm:text-start uppercase'>
                impacto
              </p>

              <h3 className='text-black mb-5 text-center sm:text-start'>
                <span className='text-primary'>Criar experiências reais</span>{' '}
                que orientam decisões mais conscientes.
              </h3>

              <p className='pt-2 mb-10 text-center sm:text-start text-black/75 text-lg'>
                Através de conteúdos relevantes, contacto com empresas,
                iniciativas práticas e momentos de proximidade com o ecossistema
                profissional, o programa ajuda cada participante a desenvolver
                competências e a aproximar-se das oportunidades certas.
              </p>

              <div className='text-center sm:text-start'>
                <Link
                  href='#FAQ'
                  className='text-xl py-4 px-10 mt-5 inline-block font-semibold text-white rounded-full bg-primary border border-primary hover:bg-darkmode hover:border-darkmode'>
                  Como funciona
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Beliefs