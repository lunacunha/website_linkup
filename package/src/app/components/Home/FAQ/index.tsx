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
      question: 'O que é exatamente o Nurture Program?',
      answer:
        'É um programa de acompanhamento contínuo que aproxima estudantes, faculdades e empresas através de conteúdos, experiências práticas e contacto com oportunidades reais.',
    },
    {
      question: 'Quem pode participar?',
      answer:
        'Destina-se sobretudo a estudantes de licenciatura e mestrado, envolvendo também faculdades e empresas parceiras.',
    },
    {
      question: 'Como funciona ao longo do ano?',
      answer:
        'Ao longo do ano, o programa combina newsletters, visitas, open days, job shadowing e outras iniciativas que aproximam os participantes do ecossistema profissional.',
    },
    {
      question: 'Existe contacto direto com empresas?',
      answer:
        'Sim. O programa foi desenhado para criar contacto progressivo com empresas, profissionais e oportunidades concretas.',
    },
  ]

  return (
    <section
      id='FAQ'
      className='relative overflow-hidden py-12 lg:py-16 dark:bg-darkmode'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='mx-auto max-w-3xl text-center'>
          <p className='text-sm font-semibold uppercase tracking-[0.22em] text-[#c4510a]'>
            FAQ
          </p>
          <h2 className='mt-4 max-w-3xl mx-auto'>
            Perguntas frequentes
          </h2>
          <p className='mt-5 text-lg leading-8 text-black/60'>
            Respostas simples para perceber rapidamente como funciona.
          </p>
        </div>

        <div className='mx-auto mt-14 flex w-full max-w-5xl flex-col gap-5'>
          {items.map((item, index) => (
            <div
              key={item.question}
              className='rounded-[1.5rem] border border-slate-200/80 bg-slate-50/60 px-6 py-5 transition-colors duration-200 hover:bg-white sm:px-8 sm:py-6'>
              <Disclosure defaultOpen={index === 0}>
                {({ open }) => (
                  <>
                    <DisclosureButton className='flex w-full items-center justify-between gap-6 text-left text-lg font-semibold text-black focus:outline-hidden hover:cursor-pointer sm:text-xl'>
                      <span>{item.question}</span>
                      <Icon
                        icon={open ? 'lucide:minus' : 'lucide:plus'}
                        width='18'
                        height='18'
                        className='shrink-0 text-black/55'
                      />
                    </DisclosureButton>

                    <DisclosurePanel className='mt-5 border-t border-slate-200/80 pt-5 text-base leading-8 text-black/65'>
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
