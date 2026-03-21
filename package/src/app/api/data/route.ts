import { NextResponse } from 'next/server'

import { HeaderItem } from '@/app/types/menu'
import { aboutdata } from '@/app/types/aboutdata'
import { workdata } from '@/app/types/workdata'
import { featureddata } from '@/app/types/featureddata'
import { testimonials } from '@/app/types/testimonials'
import { articles } from '@/app/types/articles'
import { footerlinks } from '@/app/types/footerlinks'

// header nav-links data
const headerData: HeaderItem[] = [
  { label: 'Sobre', href: '#About' },
  { label: 'Para Quem', href: '#Team' },
  { label: 'Estratégia', href: '#FAQ' },
  { label: 'Próximos Passos', href: '#Blog' },
  { label: 'Contacto', href: '#Contact' },
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
    imgSrc: '/images/wework/avatar.svg',
  },
  {
    profession: 'Faculdades',
    name: 'Universidades parceiras',
    imgSrc: '/images/wework/avatar3.svg',
  },
  {
    profession: 'Empresas',
    name: 'Empresas de referência',
    imgSrc: '/images/wework/avatar4.svg',
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
    heading: 'Job shadowing e experiências reais com profissionais.',
    imgSrc: '/images/featured/feat1.jpg',
  },
  {
    heading: 'Hackathons, desafios e oportunidades antecipadas.',
    imgSrc: '/images/featured/feat2.jpg',
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

// testimonial data
const TestimonialsData: testimonials[] = [
  {
    name: 'Estudantes',
    profession: 'Licenciatura e Mestrado',
    comment:
      'Sinto falta de orientação estruturada para tomar decisões informadas sobre o meu futuro profissional.',
    imgSrc: '/images/testimonial/user1.svg',
    rating: 5,
  },
  {
    name: 'Estudantes',
    profession: 'Ligação ao mercado',
    comment:
      'Não existe contacto real com o mercado e as empresas ao longo do percurso académico.',
    imgSrc: '/images/testimonial/user2.svg',
    rating: 5,
  },
  {
    name: 'Estudantes',
    profession: 'Aprendizagem aplicada',
    comment:
      'Quero aprender a fazer, não apenas a ouvir, através de experiências práticas e contacto real.',
    imgSrc: '/images/testimonial/user3.svg',
    rating: 5,
  },
]

// artical data
const ArticlesData: articles[] = [
  {
    time: '3 min',
    heading: 'Porque um programa de nurture',
    heading2: 'faz diferença na empregabilidade',
    name: 'GoTalent',
    date: 'março 2026',
    imgSrc: '/images/articles/article.png',
  },
  {
    time: '4 min',
    heading: 'Como aproximar estudantes',
    heading2: 'e empresas de forma natural',
    name: 'GoTalent',
    date: 'março 2026',
    imgSrc: '/images/articles/article2.png',
  },
  {
    time: '5 min',
    heading: 'Da faculdade ao mercado:',
    heading2: 'experiências que aceleram competências',
    name: 'GoTalent',
    date: 'março 2026',
    imgSrc: '/images/articles/article3.png',
  },
]

// footer links data
const FooterLinksData: footerlinks[] = [
  {
    section: 'Programa',
    links: [
      { label: 'Sobre', href: '#About' },
      { label: 'Para Quem', href: '#Team' },
      { label: 'Estratégia', href: '#FAQ' },
      { label: 'Próximos Passos', href: '#Blog' },
    ],
  },
  {
    section: 'Iniciativas',
    links: [
      { label: 'Newsletter', href: '/' },
      { label: 'Open Days', href: '/' },
      { label: 'Job Shadowing', href: '/' },
      { label: 'Hackathons', href: '/' },
    ],
  },
  {
    section: 'Parceiros',
    links: [
      { label: 'Estudantes', href: '/' },
      { label: 'Faculdades', href: '/' },
      { label: 'Empresas', href: '/' },
    ],
  },
  {
    section: 'Contacto',
    links: [
      { label: 'Email', href: 'mailto:hello@gotalent.com' },
      { label: 'Instagram', href: '/' },
      { label: 'LinkedIn', href: '/' },
    ],
  },
]

export const GET = () => {
  return NextResponse.json({
    headerData,
    Aboutdata,
    WorkData,
    FeaturedData,
    PlansData,
    TestimonialsData,
    ArticlesData,
    FooterLinksData,
  })
}
