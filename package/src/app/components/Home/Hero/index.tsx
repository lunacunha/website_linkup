'use client'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className='relative overflow-hidden z-1 pt-28 lg:pt-32'>
      <div className='pointer-events-none absolute inset-x-0 top-0 h-64 bg-linear-to-b from-sky-50 to-transparent' />
      <div className='container relative mx-auto max-w-7xl px-4'>
        <div className='grid grid-cols-12 items-center gap-y-10 lg:gap-x-8'>
          <div className='col-span-12 xl:col-span-5 lg:col-span-6 md:col-span-12 sm:col-span-12'>
            <div className='py-2 px-5 bg-primary/10 rounded-full w-fit border border-primary/10'>
              <p className='text-primary text-lg font-bold'>From Campus to Career</p>
            </div>
            <h1 className='mt-8 max-w-xl leading-tight'>
              Aproximar talento, inspirar futuro, acelerar competências
            </h1>
            <p className='mt-6 max-w-2xl text-lg leading-8 text-black/65'>
              Uma iniciativa pensada para ligar estudantes, faculdades e
              empresas com mais clareza, experiências reais e contacto próximo
              com oportunidades concretas.
            </p>
          </div>
          <div className='col-span-12 xl:col-span-7 lg:col-span-6 lg:block hidden'>
            <Image
              src='/images/hero/banner-image.png'
              alt='banner image'
              width={600}
              height={600}
              className='w-full opacity-95'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
