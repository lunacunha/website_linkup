'use client'
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'
import { workdata } from '@/app/types/workdata'

const mobileSliderSettings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: false,
  speed: 500,
  cssEase: 'linear',
}

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

  const renderWorkCard = (items: workdata, i: number) => (
    <div
      key={i}
      className='rounded-[1.75rem] border border-[#d8d1c3] bg-[#fffdf9] p-3 text-center sm:p-5'>

      <div className='mx-auto w-full max-w-[360px] sm:max-w-[320px]'>
        <div className='relative aspect-square w-full overflow-hidden rounded-[1.5rem] border border-[#d8d1c3] bg-[#f4ecdf]'>
          <Image
            src={items.imgSrc}
            alt={items.name}
            fill
            className='object-cover'
          />
        </div>
      </div>

      <h6 className='text-xl text-black font-bold pt-5'>
        {items.name}
      </h6>

      <p className='text-base font-normal pt-3 text-black/60'>
        {items.profession}
      </p>
    </div>
  )

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

        <div className='mt-12 lg:hidden'>
          <Slider {...mobileSliderSettings}>
            {work.map((items, i) => (
              <div key={i} className='px-2 pb-2'>
                {renderWorkCard(items, i)}
              </div>
            ))}
          </Slider>
        </div>

        <div className='mt-12 hidden gap-6 lg:grid lg:grid-cols-3'>
          {work.map((items, i) => renderWorkCard(items, i))}
        </div>
      </div>
    </section>
  )
}

export default Work
