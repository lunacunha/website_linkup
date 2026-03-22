'use client'
import { useEffect, useState } from 'react'
import { aboutdata } from '@/app/types/aboutdata'
import Image from 'next/image'
import AboutSkeleton from '../../Skeleton/AboutUs'

const Aboutus = () => {
  // fetch about data
  const [about, setAbout] = useState<aboutdata[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setAbout(data.Aboutdata)
      } catch (error) {
        console.error('Error fetching services:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <section id='About' className='overflow-hidden py-12 lg:py-16'>
      <div className='container mx-auto max-w-7xl px-4 relative z-1'>
        <div className='rounded-[2rem] border border-slate-200/80 bg-slate-50/70 p-8 sm:p-10 lg:p-12'>
          <p className='text-center text-primary/80 text-sm font-semibold tracking-[0.22em] uppercase'>
            Sobre o programa
          </p>
          <h2 className='text-center pb-6 mt-4'>Como o LinkUp Academy cria proximidade.</h2>
          <p className='mx-auto max-w-3xl text-center text-lg leading-8 text-black/60'>
            Um modelo pensado para dar mais contexto, ligação e experiências
            reais ao percurso académico.
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
            {loading
              ? Array.from({ length: 3 }).map((_, index) => (
                  <AboutSkeleton key={index} />
                ))
              : about.map((item, i) => (
                  <div
                    key={i}
                    className='rounded-[1.75rem] border border-slate-200 bg-white p-8 transition-colors duration-300 hover:border-primary/20 hover:bg-slate-50'>
                    <h5 className='mb-5'>
                      {item.heading}
                    </h5>
                    <Image
                      src={item.imgSrc}
                      alt={item.imgSrc}
                      width={100}
                      height={100}
                      className='mb-5'
                    />
                    <p className='text-lg font-normal leading-8 text-black/70'>
                      {item.paragraph}
                    </p>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Aboutus
