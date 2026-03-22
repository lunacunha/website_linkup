import Link from 'next/link'
const programLinks = [
  { label: 'Sobre', href: '#About' },
  { label: 'Para Quem', href: '#Team' },
  { label: 'Iniciativas', href: '#featured' },
  { label: 'FAQ', href: '#FAQ' },
  { label: 'Contacto', href: '#contact' },
]

const contactLinks = [
  { label: 'hello@gotalent.com', href: 'mailto:hello@gotalent.com' },
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
]

const Footer = () => {
  return (
    <footer id='contact' className='bg-black scroll-mt-28 text-white'>
      <div className='container mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-10 text-center md:grid-cols-3 md:text-left'>
          <div className='mx-auto max-w-sm md:mx-0'>
            <h4 className='text-2xl font-semibold tracking-tight'>
              LinkUp Academy
            </h4>
            <p className='mt-4 text-sm leading-7 text-white/70'>
              Programa que aproxima estudantes, faculdades e empresas através
              de experiências e oportunidades reais.
            </p>
          </div>

          <div>
            <p className='text-sm font-semibold uppercase tracking-[0.2em] text-white/60'>
              Programa
            </p>
            <ul className='mt-4 space-y-3'>
              {programLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className='text-sm text-white/80 transition hover:text-white'>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className='text-sm font-semibold uppercase tracking-[0.2em] text-white/60'>
              Contacto
            </p>
            <ul className='mt-4 space-y-3'>
              {contactLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={
                      item.href.startsWith('http')
                        ? 'noopener noreferrer'
                        : undefined
                    }
                    className='text-sm text-white/80 transition hover:text-white'>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='mt-12 border-t border-white/10 pt-6 text-center'>
          <p className='text-sm text-white/60'>© 2026 LinkUp Academy</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
