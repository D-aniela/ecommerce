'use client'

import { useState } from 'react'
import Link from 'next/link'
import MobileMenu from './MobileMenu'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const links = [
    { label: 'Women', href: '/women' },
    { label: 'Men', href: '/men' },
    { label: 'Accessories', href: '/accessories' },
  ]

  return (
    <header className='bg-white border-b'>
      <nav className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          {/* LEFT - Links */}
          <div className='flex items-center'>
            <div className='hidden md:flex md:space-x-6'>
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className='text-sm font-medium text-gray-800 hover:text-black'
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Hamburger */}
            <div className='flex md:hidden'>
              <button
                onClick={() => setMobileOpen(true)}
                aria-label='Open menu'
                className='inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100'
              >
                <svg
                  className='h-6 w-6'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M4 6h16M4 12h16M4 18h16'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* CENTER - Logo */}
          <div className='flex-1 flex justify-center md:justify-center'>
            <Link href='/' className='flex items-center'>
              <span className='sr-only'>Gymshark</span>
              <div className='text-xl font-extrabold tracking-wide text-black'>
                GYMSHARK
              </div>
            </Link>
          </div>

          {/* RIGHT - Icons */}
          <div className='flex items-center space-x-4'>
            <button
              className='hidden sm:inline-flex p-2 rounded-md hover:bg-gray-100'
              aria-label='Search'
            >
              <svg
                className='h-5 w-5'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M21 21l-4.35-4.35'
                  stroke='black'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <circle
                  cx='11'
                  cy='11'
                  r='6'
                  stroke='black'
                  strokeWidth='1.5'
                />
              </svg>
            </button>

            <button
              className='p-2 rounded-md hover:bg-gray-100'
              aria-label='Wishlist'
            >
              <svg
                className='h-5 w-5'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M20.8 8.6a5.6 5.6 0 0 0-8-7.6 5.6 5.6 0 0 0-8 7.6L12 21.5l8.8-12.9z'
                  stroke='black'
                  strokeWidth='1'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>

            <button
              className='p-2 rounded-md hover:bg-gray-100'
              aria-label='Account'
            >
              <svg
                className='h-5 w-5'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM3 21a9 9 0 0 1 18 0'
                  stroke='black'
                  strokeWidth='1.2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>

            <Link
              href='/cart'
              className='relative p-2 rounded-md hover:bg-gray-100'
            >
              <svg
                className='h-5 w-5'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M3 3h2l.4 2M7 13h10l3-8H6.4'
                  stroke='black'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <circle cx='10' cy='20' r='1' fill='black' />
                <circle cx='18' cy='20' r='1' fill='black' />
              </svg>
              <span className='absolute -top-1 -right-1 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-semibold leading-none text-white bg-blue-600 rounded-full'>
                2
              </span>
            </Link>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <MobileMenu
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        links={links}
      />
    </header>
  )
}
