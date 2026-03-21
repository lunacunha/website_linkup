'use client'
import React from 'react'
import { Icon } from '@iconify/react'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'

const FAQ = () => {
  return (
    <section
      id='FAQ'
      className='relative py-1 bg-cover bg-center overflow-hidden dark:bg-darkmode'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='relative rounded-2xl py-24 bg-faq-bg bg-no-repeat bg-cover bg-primary'>
          <p className='text-lg font-normal text-white text-center mb-6'>FAQ</p>

          <h2 className='text-white text-center max-w-3xl mx-auto'>
            Perguntas frequentes sobre o programa.
          </h2>

          <div className='w-full px-4 pt-16'>

            {/* FAQ 1 */}
            <div className='mx-auto w-full max-w-5xl rounded-2xl p-8 bg-white mb-5'>
              <Disclosure>
                {({ open }) => (
                  <div>
                    <DisclosureButton className='flex w-full justify-between items-center text-left text-2xl font-medium focus:outline-hidden hover:cursor-pointer'>
                      <span className='text-black'>
                        O que é o Nurture Program?
                      </span>
                      <div className={`h-5 w-5 transform transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>
                        <Icon icon='lucide:chevron-up' width='20' height='20' />
                      </div>
                    </DisclosureButton>

                    <DisclosurePanel className='text-base text-black/60 font-normal text-left pt-4 mt-6 border-t border-border'>
                      É um programa de acompanhamento contínuo que aproxima estudantes, faculdades e empresas, criando experiências práticas, conteúdos relevantes e contacto com oportunidades reais.
                    </DisclosurePanel>
                  </div>
                )}
              </Disclosure>
            </div>

            {/* FAQ 2 */}
            <div className='mx-auto w-full max-w-5xl rounded-2xl p-8 bg-white mb-5'>
              <Disclosure>
                {({ open }) => (
                  <>
                    <DisclosureButton className='flex w-full justify-between items-center text-left text-2xl font-medium focus:outline-hidden hover:cursor-pointer'>
                      <span className='text-black'>
                        Quem pode participar?
                      </span>
                      <div className={`h-5 w-5 transform transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>
                        <Icon icon='lucide:chevron-up' width='20' height='20' />
                      </div>
                    </DisclosureButton>

                    <DisclosurePanel className='text-base text-black/60 pt-4 mt-6 text-left border-t border-border'>
                      O programa dirige-se principalmente a estudantes de licenciatura e mestrado, mas envolve também faculdades e empresas parceiras.
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            </div>

            {/* FAQ 3 */}
            <div className='mx-auto w-full max-w-5xl rounded-2xl p-8 bg-white mb-5'>
              <Disclosure>
                {({ open }) => (
                  <>
                    <DisclosureButton className='flex w-full justify-between items-center text-left text-2xl font-medium focus:outline-hidden hover:cursor-pointer'>
                      <span className='text-black'>
                        Como funciona na prática?
                      </span>
                      <div className={`h-5 w-5 transform transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>
                        <Icon icon='lucide:chevron-up' width='20' height='20' />
                      </div>
                    </DisclosureButton>

                    <DisclosurePanel className='text-base text-black/60 pt-4 mt-6 text-left border-t border-border'>
                      O programa combina newsletters, visitas, open days, job shadowing, desafios e outras experiências que aproximam os participantes do ecossistema profissional.
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            </div>

            {/* FAQ 4 */}
            <div className='mx-auto w-full max-w-5xl rounded-2xl p-8 bg-white'>
              <Disclosure>
                {({ open }) => (
                  <>
                    <DisclosureButton className='flex w-full justify-between items-center text-left text-2xl font-medium focus:outline-hidden hover:cursor-pointer'>
                      <span className='text-black'>
                        Há ligação direta com empresas?
                      </span>
                      <div className={`h-5 w-5 transform transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>
                        <Icon icon='lucide:chevron-up' width='20' height='20' />
                      </div>
                    </DisclosureButton>

                    <DisclosurePanel className='text-base text-black/60 pt-4 mt-6 text-left border-t border-border'>
                      Sim. O programa foi desenhado precisamente para criar contacto progressivo com empresas, profissionais e oportunidades concretas.
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ