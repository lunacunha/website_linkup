'use client'
import React from 'react'
import Image from 'next/image'

const Digital = () => {
  return (
    <section className='relative overflow-hidden py-10 lg:py-14'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='relative overflow-hidden rounded-[2rem] border border-[#d8d1c3] bg-[#f4ecdf] lg:pb-18 pb-12'>
          <div className='pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-linear-to-l from-[#fffdf9]/90 to-transparent xl:block' />
          <div className='grid grid-cols-1 xl:grid-cols-2'>
            {/* COLUMN-1 */}
            <div className='px-8 pt-12 text-center sm:px-12 lg:px-16 lg:pt-16 lg:text-left'>
              <p className='mb-4 text-sm font-semibold tracking-[0.22em] uppercase text-[#c26b3c]'>
                Quem somos
              </p>
              <h2 className='leading-tight lg:w-full'>
                Ligamos academia e mercado com experiências mais próximas da
                realidade.
              </h2>
              <p className='mt-6 max-w-2xl text-lg leading-8 text-black/70'>
                O programa foi desenhado para transformar informação dispersa em
                orientação contínua, criando um percurso mais claro entre
                talento, aprendizagem e oportunidades.
              </p>
            </div>
          </div>
          {/* COLUMN-2 */}
          <div className='absolute right-0 top-1/2 hidden -translate-y-1/2 xl:block'>
            <Image
              src='/images/digital/iniciativas.png'
              alt='Imagem das iniciativas'
              width={760}
              height={640}
              className='max-w-[33rem] rounded-tl-[2rem] object-contain opacity-100'
            />
          </div>
        </div>
      </div>
    </section>
  )
}
export default Digital
