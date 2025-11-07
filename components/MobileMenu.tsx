import Link from 'next/link'

interface MobileProps {
  mobileOpen: boolean
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>
  links: { label: string; href: string }[]
}

const MobileMenu = ({ mobileOpen, setMobileOpen, links }: MobileProps) => {
  return (
    <div
      className={`fixed inset-0 z-40 transition-transform transform ${
        mobileOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div
        className='absolute inset-0 bg-black/40'
        onClick={() => setMobileOpen(false)}
      />
      <aside className='absolute right-0 top-0 bottom-0 w-3/4 max-w-sm bg-white shadow-xl p-6 overflow-auto'>
        <div className='flex items-center justify-between mb-6'>
          <div className='text-lg font-bold'>Menu</div>
          <button
            onClick={() => setMobileOpen(false)}
            aria-label='Close menu'
            className='p-2 rounded-md hover:bg-gray-100'
          >
            <svg
              className='h-6 w-6'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M6 6l12 12M6 18L18 6'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
        </div>

        <nav className='space-y-4'>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className='block py-2 font-medium'
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>
    </div>
  )
}

export default MobileMenu
