import React from 'react'
import Hero from '@/app/components/Home/Hero'
import Aboutus from '@/app/components/Home/AboutUs'
import Digital from '@/app/components/Home/Digital'
import Beliefs from '@/app/components/Home/Beliefs'
import Work from '@/app/components/Home/Work'
import Featured from '@/app/components/Home/Featured'
import Manage from '@/app/components/Home/Manage'
import FAQ from '@/app/components/Home/FAQ'
import Join from '@/app/components/Home/Joinus'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Desgy Solutions',
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Aboutus />
      <Digital />
      <Beliefs />
      <Work />
      <Featured />
      <Manage />
      <FAQ />
      <Join />
    </main>
  )
}
