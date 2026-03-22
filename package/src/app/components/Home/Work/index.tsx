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
      className='relative py-16 overflow-hidden'>
      <div className='container mx-auto max-w-7xl px-4'>

        <div className='text-center'>
          <h3 className='text-black my-5'>
            Os três pilares do programa.
          </h3>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-12'>
          {work.map((items, i) => (
            <div
              key={i}
              className='bg-white py-10 text-center shadow-lg rounded-3xl'>

              <div className='relative w-52 h-52 mx-auto overflow-hidden rounded-2xl'>
                <Image
                  src={items.imgSrc}
                  alt={items.name}
                  fill
                  className='object-cover'
                />
              </div>

              <h6 className='text-xl text-black font-bold pt-8'>
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