'use client'
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'
import { featureddata } from '@/app/types/featureddata'
import FeaturedSkeleton from '../../Skeleton/Featured'

function SampleNextArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'black',
        padding: '28px',
        borderRadius: '20px',
      }}
      onClick={onClick}
    />
  )
}

function SamplePrevArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'black',
        padding: '28px',
        borderRadius: '20px',
      }}
      onClick={onClick}
    />
  )
}
const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  autoplay: false,
  speed: 500,
  nextArrow: (
    <SampleNextArrow
      className={undefined}
      style={undefined}
      onClick={undefined}
    />
  ),
  prevArrow: (
    <SamplePrevArrow
      className={undefined}
      style={undefined}
      onClick={undefined}
    />
  ),
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 800,
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
          <p className='text-sm font-semibold uppercase tracking-[0.22em] text-primary/80'>
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
            ? Array.from({ length: 2 }).map((_, index) => (
                <FeaturedSkeleton key={index} />
              ))
            : featured.map((items, i) => (
                <div key={i}>
                  <div className='m-3 rounded-[1.75rem] border border-slate-200 bg-white p-4'>
                    <div className='relative w-full h-[420px] overflow-hidden rounded-[1.35rem] bg-slate-100'>
                      <Image
                        src={items.imgSrc}
                        alt={items.heading}
                        fill
                        className='object-cover rounded-2xl'
                      />
                    </div>
                    <div>
                      <h4 className='max-w-sm font-bold text-center sm:text-start mb-2 mt-6 text-black'>
                        {items.heading}
                      </h4>
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
