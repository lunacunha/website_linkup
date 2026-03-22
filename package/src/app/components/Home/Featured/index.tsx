'use client'
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'
import { featureddata } from '@/app/types/featureddata'
import FeaturedSkeleton from '../../Skeleton/Featured'

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  autoplay: false,
  speed: 500,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
}

const Featured = () => {
  const [featured, setFeatured] = useState<featureddata[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setFeatured(data.FeaturedData)
      } catch (error) {
        console.error('Error fetching services:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <section
      id='featured'
      className='relative scroll-mt-28 overflow-hidden py-12 lg:py-16'>
      <div className='container mx-auto max-w-7xl px-4 relative'>
        <div className='mx-auto mb-12 max-w-3xl text-center overflow-hidden'>
          <p className='text-sm font-semibold uppercase tracking-[0.22em] text-[#c4510a]'>
            Iniciativas
          </p>
          <h3 className='mt-4'>Experiências que aproximam decisão e prática.</h3>
          <p className='mt-5 text-lg leading-8 text-black/60'>
            Um conjunto de formatos leves e relevantes para dar aos estudantes
            contacto contínuo com o ecossistema profissional.
          </p>
        </div>

        <Slider {...settings}>
          {loading
            ? Array.from({ length: 4 }).map((_, index) => (
                <FeaturedSkeleton key={index} />
              ))
            : featured.map((items, i) => (
                <div key={i} className='px-3 pb-2'>
                  <div className='rounded-[1.65rem] border border-slate-200 bg-white p-4 sm:p-5'>
                    <div className='relative aspect-[4/3] w-full overflow-hidden rounded-[1.25rem] bg-slate-100'>
                      <Image
                        src={items.imgSrc}
                        alt={items.heading}
                        fill
                        className='object-cover'
                      />
                    </div>
                    <div className='mt-5'>
                      <h4 className='text-center text-[1.55rem] font-semibold text-black sm:text-left'>
                        {items.heading}
                      </h4>
                      <p className='mt-2 text-center text-base leading-7 text-black/60 sm:text-left'>
                        {items.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
        </Slider>
      </div>
    </section>
  )
}
export default Featured
