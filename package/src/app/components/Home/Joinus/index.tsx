'use client'
import React from 'react'
import Link from 'next/link'

const Join = () => {
  return (
    <section className='overflow-hidden bg-joinus py-16'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='text-center'>
          <p className='text-primary text-lg font-normal tracking-widest uppercase'>
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
        </div>

        <div className='mx-auto max-w-3xl pt-8'>
          <div className='sm:flex items-center mx-5 p-5 sm:p-2 rounded-xl justify-between bg-grey sm:rounded-full'>

            <div className='flex-1'>
              <input
                type='email'
                className='w-full py-4 sm:pl-6 lg:text-xl text-black bg-transparent focus:outline-hidden focus:text-black'
                placeholder='O teu email'
                autoComplete='off'
              />
            </div>

            <div className='sm:mr-2 mt-4 sm:mt-0'>
              <Link
                href='#'
                className='w-full inline-block text-xl text-white font-semibold text-center rounded-xl sm:rounded-full bg-primary py-4 px-10 hover:bg-darkmode duration-300'>
                Subscrever
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Join