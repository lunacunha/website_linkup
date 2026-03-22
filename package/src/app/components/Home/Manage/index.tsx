'use client'
import { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import PlansSkeleton from '../../Skeleton/Plans'
import Link from 'next/link'

const mobileSliderSettings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: false,
  speed: 500,
  cssEase: 'linear',
  adaptiveHeight: true,
}

const Manage = () => {
  const [plans, setPlans] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setPlans(data.PlansData)
      } catch (error) {
        console.error('Error fetching plans:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const renderPlanCard = (items: any, i: number) => (
    <div
      className='rounded-[1.75rem] border border-slate-200 bg-white p-10 text-center'
      key={i}>
      <h5 className='mb-3'>{items.heading}</h5>

      <p className='text-4xl font-extrabold mb-3'>
        {items.price.yearly}
      </p>

      <p className='text-sm font-medium mb-8 text-black/60'>
        {items.user}
      </p>

      <Link href='#contact'>
        <button className='mb-8 rounded-full border border-primary/25 bg-primary/5 px-10 py-4 text-sm font-bold text-primary transition hover:bg-primary hover:text-white hover:cursor-pointer'>
          Pedir mais informações
        </button>
      </Link>

      <div className='space-y-4'>
        {Object.values(items.features).map((feature: any, index) => (
          <p
            className='text-sm font-medium text-darkgrey'
            key={index}>
            {feature}
          </p>
        ))}
      </div>
    </div>
  )

  return (
    <section id='services-section' className='py-10 lg:py-14'>
      <div className='container mx-auto max-w-7xl px-4'>
        <h2 className='text-center'>
          Packs do programa.
        </h2>

        <p className='text-center text-black/60 max-w-3xl mx-auto mt-6'>
          Diferentes níveis de envolvimento para aproximar estudantes,
          faculdades e empresas através de experiências, conteúdos e contacto
          com oportunidades reais.
        </p>

        <div className='mt-14 lg:hidden'>
          {loading ? (
            <div className='space-y-6'>
              {Array.from({ length: 1 }).map((_, i) => (
                <PlansSkeleton key={i} />
              ))}
            </div>
          ) : (
            <Slider {...mobileSliderSettings}>
              {plans.map((items, i) => (
                <div key={i} className='px-2 pb-2'>
                  {renderPlanCard(items, i)}
                </div>
              ))}
            </Slider>
          )}
        </div>

        <div className='mt-14 hidden gap-6 lg:grid lg:grid-cols-3'>
          {loading
            ? Array.from({ length: 3 }).map((_, i) => <PlansSkeleton key={i} />)
            : plans.map((items, i) => renderPlanCard(items, i))}
        </div>
      </div>
    </section>
  )
}

export default Manage
