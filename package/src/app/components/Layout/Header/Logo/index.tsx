import Image from 'next/image'
import Link from 'next/link'

const Logo: React.FC = () => {
  return (
    <Link
      href='/'
      className='flex items-center gap-3 text-black no-underline leading-none'>
      <Image
        src='/images/logo/link-up-logo.png'
        alt='LinkUp Academy logo'
        width={42}
        height={42}
        className='h-10 w-10 rounded-md object-contain sm:h-11 sm:w-11'
      />
      <span className='translate-y-[1px] text-xl font-semibold tracking-tight sm:text-2xl'>
        LinkUp Academy
      </span>
    </Link>
  )
}

export default Logo
