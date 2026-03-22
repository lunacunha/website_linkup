'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { workdata } from '@/app/types/workdata'

const Work = () => {
  const [work, setWork] = useState<workdata[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setWork(data.WorkData)
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <section
      id='Team'
      className='relative overflow-hidden py-10 lg:py-14'>
      <div className='container mx-auto max-w-7xl px-4'>

        <div className='text-center'>
          <h3 className='text-black my-4'>
            Os três pilares do programa.
          </h3>
          <p className='mx-auto max-w-3xl text-lg leading-8 text-black/60'>
            Uma estrutura simples para criar ligação contínua entre quem
            aprende, quem orienta e quem abre oportunidades.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-12'>
          {work.map((items, i) => (
            <div
              key={i}
              className='rounded-[1.75rem] border border-slate-200 bg-white p-4 text-center sm:p-5'>

              <div className='mx-auto w-full max-w-[320px]'>
                <div className='relative aspect-square overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-100'>
                  <Image
                    src={items.imgSrc}
                    alt={items.name}
                    fill
                    className='object-cover'
                  />
                </div>
              </div>

              <h6 className='text-xl text-black font-bold pt-6'>
                {items.name}
              </h6>

              <p className='text-base font-normal pt-3 text-black/60'>
                {items.profession}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
