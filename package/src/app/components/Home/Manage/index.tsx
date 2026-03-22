'use client'
import { useEffect, useState } from 'react'
import PlansSkeleton from '../../Skeleton/Plans'
import Link from 'next/link'

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

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14 gap-6'>
          {loading
            ? Array.from({ length: 3 }).map((_, i) => <PlansSkeleton key={i} />)
            : plans.map((items, i) => (
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
              ))}
        </div>
      </div>
    </section>
  )
}

export default Manage
