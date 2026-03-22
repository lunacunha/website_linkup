'use client'
import React from 'react'
import { Icon } from '@iconify/react'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'

const FAQ = () => {
  const items = [
    {
      question: 'O que é o Nurture Program?',
      answer:
        'É um programa de acompanhamento contínuo que aproxima estudantes, faculdades e empresas, criando experiências práticas, conteúdos relevantes e contacto com oportunidades reais.',
    },
    {
      question: 'Quem pode participar?',
      answer:
        'O programa dirige-se principalmente a estudantes de licenciatura e mestrado, mas envolve também faculdades e empresas parceiras.',
    },
    {
      question: 'Como funciona na prática?',
      answer:
        'O programa combina newsletters, visitas, open days, job shadowing, desafios e outras experiências que aproximam os participantes do ecossistema profissional.',
    },
    {
      question: 'Há ligação direta com empresas?',
      answer:
        'Sim. O programa foi desenhado precisamente para criar contacto progressivo com empresas, profissionais e oportunidades concretas.',
    },
  ]

  return (
    <section
      id='FAQ'
      className='relative overflow-hidden py-12 lg:py-16 dark:bg-darkmode'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='mx-auto max-w-3xl text-center'>
          <p className='text-sm font-semibold uppercase tracking-[0.22em] text-primary/80'>
            FAQ
          </p>
          <h2 className='mt-4 max-w-3xl mx-auto'>
            Perguntas frequentes sobre o programa.
          </h2>
          <p className='mt-5 text-lg leading-8 text-black/60'>
            Respostas objetivas para explicar o funcionamento da iniciativa sem
            recorrer a blocos pesados ou demasiado promocionais.
          </p>
        </div>

        <div className='mx-auto mt-12 flex w-full max-w-5xl flex-col gap-4'>
          {items.map((item) => (
            <div
              key={item.question}
              className='rounded-[1.6rem] border border-slate-200 bg-white/90 p-6 sm:p-8'>
              <Disclosure>
                {({ open }) => (
                  <>
                    <DisclosureButton className='flex w-full items-center justify-between gap-6 text-left text-xl font-semibold text-black focus:outline-hidden hover:cursor-pointer sm:text-2xl'>
                      <span>{item.question}</span>
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-black/70 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>
                        <Icon icon='lucide:chevron-up' width='20' height='20' />
                      </div>
                    </DisclosureButton>

                    <DisclosurePanel className='mt-5 border-t border-slate-200 pt-5 text-base leading-8 text-black/65'>
                      {item.answer}
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
