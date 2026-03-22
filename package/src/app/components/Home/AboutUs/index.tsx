'use client'
import { useEffect, useState } from 'react'
import { aboutdata } from '@/app/types/aboutdata'
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
          <h2 className='mt-4 text-center pb-4'>
            Como o LinkUp Academy cria proximidade.
          </h2>
          <p className='mx-auto max-w-3xl text-center text-lg leading-8 text-black/60'>
            Um modelo pensado para dar mais contexto, ligação e experiências
            reais ao percurso académico.
          </p>

          <div className='mt-14 rounded-[1.9rem] border border-slate-200 bg-white px-6 py-4 sm:px-8 lg:px-10 lg:py-6'>
            <div className='grid grid-cols-1 lg:grid-cols-3'>
              {loading
                ? Array.from({ length: 3 }).map((_, index) => (
                    <AboutSkeleton key={index} />
                  ))
                : about.map((item, i) => (
                    <div
                      key={i}
                      className={`py-8 lg:px-8 ${
                        i < about.length - 1
                          ? 'border-b border-slate-200 lg:border-b-0 lg:border-r'
                          : ''
                      }`}>
                      <p className='text-sm font-semibold tracking-[0.22em] text-primary/65 uppercase'>
                        {String(i + 1).padStart(2, '0')}
                      </p>
                      <h5 className='mt-5 text-[1.7rem] leading-tight text-[#123b8f]'>
                        {i === 0
                          ? 'O que é'
                          : i === 1
                            ? 'Para quem'
                            : 'Porque existe'}
                      </h5>
                      <p className='mt-6 text-lg font-normal leading-8 text-black/68'>
                        {item.paragraph}
                      </p>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Aboutus
