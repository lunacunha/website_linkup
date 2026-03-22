import { NextResponse } from 'next/server'

import { HeaderItem } from '@/app/types/menu'
import { aboutdata } from '@/app/types/aboutdata'
import { workdata } from '@/app/types/workdata'
import { featureddata } from '@/app/types/featureddata'

// header nav-links data
const headerData: HeaderItem[] = [
  { label: 'Sobre', href: '#About' },
  { label: 'Para Quem', href: '#Team' },
  { label: 'Estratégia', href: '#FAQ' },
  { label: 'Iniciativas', href: '#featured' },
  { label: 'Contacto', href: '#contact' },
]

// about data
const Aboutdata: aboutdata[] = [
  {
    heading: 'O que é o Nurture Program?',
    imgSrc: '/images/aboutus/imgOne.svg',
    paragraph:
      'Um programa de nurture é um percurso de acompanhamento contínuo que apoia o desenvolvimento dos estudantes ao longo do tempo, criando ligações consistentes entre talento, conhecimento e mercado de trabalho.',
    link: 'Saber mais',
  },
  {
    heading: 'Para quem?',
    imgSrc: '/images/aboutus/imgTwo.svg',
    paragraph:
      'O programa foi pensado para estudantes de licenciatura e mestrado, faculdades e empresas de referência, aproximando os jovens de oportunidades reais e reforçando a ligação entre academia e mercado.',
    link: 'Explorar',
  },
  {
    heading: 'Porque existe?',
    imgSrc: '/images/aboutus/imgThree.svg',
    paragraph:
      'Queremos reduzir a distância entre campus e mercado de trabalho, dando aos estudantes orientação, contacto real com empresas, experiências práticas e exemplos inspiradores para decisões mais informadas.',
    link: 'Descobrir',
  },
]

// work-data
const WorkData: workdata[] = [
  {
    profession: 'Estudantes',
    name: 'Licenciatura e Mestrado',
    imgSrc: '/images/testimonial/students.jpg',
  },
  {
    profession: 'Faculdades',
    name: 'Universidades parceiras',
    imgSrc: '/images/testimonial/university.jpg',
  },
  {
    profession: 'Empresas',
    name: 'Empresas de referência',
    imgSrc: '/images/testimonial/natixis.jpg',
  },
]

// featured data
const FeaturedData: featureddata[] = [
  {
    heading: 'Newsletter segmentada com conteúdos relevantes.',
    imgSrc: '/images/featured/feat1.jpg',
  },
  {
    heading: 'Open days e visitas às instalações.',
    imgSrc: '/images/featured/feat2.jpg',
  },
  {
    heading: 'Job shadowing com contacto real.',
    imgSrc: '/images/featured/feat3.jpg',
  },
  {
    heading: 'Hackathons e experiências práticas.',
    imgSrc: '/images/featured/feat4.jpg',
  },
]

// plans data
const PlansData = [
  {
    heading: 'Pack 1',
    price: {
      monthly: 'Sob consulta',
      yearly: 'Sob consulta',
    },
    user: 'programa base',
    features: {
      profiles: 'Newsletter bi-mensal segmentada',
      posts: 'Conteúdos editoriais definidos por rubrica',
      templates: 'Social media em TikTok, Instagram e LinkedIn',
      view: 'Open day / visita às instalações',
      support: 'Ativação da comunidade estudantil',
    },
  },
  {
    heading: 'Pack 2',
    price: {
      monthly: 'Sob consulta',
      yearly: 'Sob consulta',
    },
    user: 'programa intermédio',
    features: {
      profiles: 'Tudo do Pack 1',
      posts: 'Job shadowing',
      templates: 'Maior proximidade com profissionais',
      view: 'Experiência prática orientada',
      support: 'Maior contacto com a cultura da empresa',
    },
  },
  {
    heading: 'Pack 3',
    price: {
      monthly: 'Sob consulta',
      yearly: 'Sob consulta',
    },
    user: 'programa avançado',
    features: {
      profiles: 'Tudo do Pack 2',
      posts: 'Ideathon / desafio temático',
      templates: 'Maior envolvimento com empresas',
      view: 'Exploração de áreas reais de negócio',
      support: 'Ligação forte entre talento e oportunidade',
    },
  },
]

export const GET = () => {
  return NextResponse.json({
    headerData,
    Aboutdata,
    WorkData,
    FeaturedData,
    PlansData,
  })
}
