'use client'
import { Key, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { HeaderItem } from '@/app/types/menu'
import Logo from './Logo'
import HeaderLink from './Navigation/HeaderLink'
import MobileHeaderLink from './Navigation/MobileHeaderLink'

const Header: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [sticky, setSticky] = useState(false)

  const mobileMenuRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    setSticky(window.scrollY >= 80)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      navbarOpen
    ) {
      setNavbarOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [navbarOpen])

  useEffect(() => {
    if (navbarOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [navbarOpen])

  const [headerData, setHeaderData] = useState<HeaderItem[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setHeaderData(data.headerData)
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-all duration-300 border-b border-black/10 ${
        sticky ? 'shadow-lg bg-white' : 'shadow-none bg-white'
      }`}>
      <div>
        <div className='container mx-auto flex max-w-7xl items-center justify-between px-4'>
          <div
            className={`flex items-center duration-300 ${sticky ? 'py-3' : 'py-5'}`}>
            <Logo />
          </div>

          <nav className='hidden lg:ml-auto lg:flex lg:items-center lg:justify-end lg:gap-10'>
            {headerData.map((item, index) => (
              <HeaderLink key={index} item={item} />
            ))}
          </nav>

          <div
            className={`flex items-center duration-300 lg:hidden ${sticky ? 'py-3' : 'py-5'}`}>
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className='block lg:hidden p-2 rounded-lg'
              aria-label='Toggle mobile menu'>
              <span className='block w-6 h-0.5 bg-darkmode'></span>
              <span className='block w-6 h-0.5 bg-darkmode mt-1.5'></span>
              <span className='block w-6 h-0.5 bg-darkmode mt-1.5'></span>
            </button>
          </div>
        </div>

        {navbarOpen && (
          <div className='fixed top-0 left-0 w-full h-full bg-black/35 z-40 backdrop-blur-[2px]' />
        )}

        <div
          ref={mobileMenuRef}
          className={`lg:hidden fixed top-0 right-0 h-full w-full max-w-sm transform bg-[#fffaf5] shadow-2xl transition-transform duration-300 ${
            navbarOpen ? 'translate-x-0' : 'translate-x-full'
          } z-50`}>
          <div className='flex h-full flex-col'>
            <div className='border-b border-[#eadfd4] px-6 pb-6 pt-7'>
              <div className='flex items-start justify-between gap-4'>
                <div className='min-w-0'>
                  <Logo />
                </div>

                <button
                  onClick={() => setNavbarOpen(false)}
                  className='mt-1 flex h-10 w-10 items-center justify-center rounded-full border border-[#c4510a]/20 text-[#c4510a] transition hover:bg-[#c4510a]/8'
                  aria-label='Close menu modal'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='18'
                    height='18'
                    viewBox='0 0 24 24'
                    fill='none'>
                    <path
                      d='M6 6L18 18M18 6L6 18'
                      stroke='currentColor'
                      strokeWidth='1.8'
                      strokeLinecap='round'
                    />
                  </svg>
                </button>
              </div>
            </div>

            <nav className='flex flex-1 flex-col items-start px-6 py-6'>
              {headerData.map(
                (item: HeaderItem, index: Key | null | undefined) => (
                  <MobileHeaderLink
                    key={index}
                    item={item}
                    onNavigate={() => setNavbarOpen(false)}
                  />
                )
              )}
            </nav>

            <div className='border-t border-[#eadfd4] px-6 py-5'>
              <p className='text-xs font-semibold uppercase tracking-[0.24em] text-[#24585c]/55'>
                Contacto
              </p>
              <div className='mt-4 flex flex-col gap-3 text-sm text-[#24585c]'>
                <Link
                  href='mailto:hello@gotalent.com'
                  className='transition hover:text-[#c4510a]'>
                  hello@gotalent.com
                </Link>
                <Link
                  href='https://instagram.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='transition hover:text-[#c4510a]'>
                  Instagram
                </Link>
                <Link
                  href='https://linkedin.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='transition hover:text-[#c4510a]'>
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
