'use client'
import React from 'react'
import Image from 'next/image'

const Digital = () => {
  return (
    <section className='relative overflow-hidden py-10 lg:py-14'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 lg:pb-24 pb-16'>
          <div className='pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-linear-to-l from-white/80 to-transparent xl:block' />
          <div className='grid grid-cols-1 xl:grid-cols-2'>
            {/* COLUMN-1 */}
            <div className='px-8 pt-16 text-center sm:px-12 lg:px-16 lg:pt-20 lg:text-left'>
              <p className='text-sm font-semibold text-primary/80 mb-4 tracking-[0.22em] uppercase'>
                Quem somos
              </p>
              <h2 className='leading-tight lg:w-full'>
                Ligamos academia e mercado com experiências mais próximas da
                realidade.
              </h2>
              <p className='mt-6 max-w-2xl text-lg leading-8 text-black/65'>
                O programa foi desenhado para transformar informação dispersa em
                orientação contínua, criando um percurso mais claro entre
                talento, aprendizagem e oportunidades.
              </p>
            </div>
          </div>
          {/* COLUMN-2 */}
          <div className='absolute bottom-0 right-0 hidden xl:block'>
            <Image
              src='/images/digital/girldoodle.svg'
              alt='doodle'
              width={815}
              height={691}
              className='max-w-[38rem] opacity-100 saturate-110'
            />
          </div>
        </div>
      </div>
    </section>
  )
}
export default Digital
