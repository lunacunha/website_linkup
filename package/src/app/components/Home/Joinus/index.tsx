'use client'
import React from 'react'
import Link from 'next/link'

const Join = () => {
  return (
    <section className='overflow-hidden py-12 lg:py-16'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='mx-auto max-w-5xl rounded-[2rem] border border-slate-200 bg-slate-50 px-6 py-12 text-center sm:px-10 lg:px-14'>
          <p className='text-[#c4510a] text-lg font-normal tracking-widest uppercase'>
            Newsletter
          </p>

          <h2 className='my-6'>
            Recebe conteúdos, oportunidades e novidades do programa.
          </h2>

          <p className='text-black/60 text-base font-normal max-w-3xl mx-auto'>
            Subscreve a newsletter para acompanhar iniciativas, experiências,
            oportunidades e conteúdos relevantes que aproximam estudantes,
            faculdades e empresas.
          </p>

          <div className='mx-auto max-w-3xl pt-8'>
            <div className='mx-0 rounded-[1.5rem] border border-slate-200 bg-white p-3 sm:flex sm:items-center sm:justify-between sm:rounded-full'>

              <div className='flex-1'>
                <input
                  type='email'
                  className='w-full bg-transparent py-4 text-black focus:outline-hidden focus:text-black sm:pl-6 lg:text-xl'
                  placeholder='O teu email'
                  autoComplete='off'
                />
              </div>

              <div className='mt-4 sm:mr-2 sm:mt-0'>
                <Link
                  href='#'
                  className='inline-block w-full rounded-xl bg-[#c4510a] px-10 py-4 text-center text-xl font-semibold text-white duration-300 hover:bg-[#9f420c] sm:rounded-full'>
                  Subscrever
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Join
