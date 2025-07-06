'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

interface HeaderProps {
  activeSection?: string
}

export default function Header({ activeSection = 'home' }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const navigation = [
    { href: '#home', label: 'Home' },
    { href: '#why-bitcoin', label: 'Why Bitcoin' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const handleNavClick = (href: string) => {
    closeMenu()
    
    // Handle smooth scrolling for same-page links
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <header
      className={`ic-navbar fixed left-0 top-0 z-40 flex w-full items-center transition-all duration-300 ${
        isScrolled ? 'bg-primary/95 backdrop-blur-sm navbar-sticky' : 'bg-primary/90 backdrop-blur-sm'
      }`}
      role="banner"
      aria-label="Navigation bar"
    >
      <div className="container mx-auto">
        <div className="ic-navbar-container relative -mx-5 flex items-center justify-between">
          <div className="w-60 lg:w-56 max-w-full px-5">
            <Link href="/" className="ic-navbar-logo block w-12 py-5">
              <Image
                src="/images/btslogo-icon-only.jpg"
                alt="Bitcoin Treasury Solutions"
                width={48}
                height={48}
                className="w-full h-auto rounded-lg"
                priority
              />
            </Link>
          </div>
          
          <div className="flex w-full items-center justify-between px-5">
            <div className="relative">
              <button
                type="button"
                className="ic-navbar-toggler absolute right-4 top-1/2 block -translate-y-1/2 rounded-md px-3 py-[6px] text-[22px] text-white ring-primary focus:ring-2 lg:hidden"
                onClick={toggleMenu}
                aria-expanded={isMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>

              <nav
                className={`ic-navbar-collapse absolute right-4 top-[80px] w-full max-w-[250px] rounded-lg transition-all duration-300 lg:opacity-100 lg:visible lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:py-0 lg:shadow-none xl:px-6 bg-primary py-5 shadow-lg ${
                  isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
              >
                <ul className="block lg:flex" role="menu" aria-label="Navigation menu">
                  {navigation.map((item) => (
                    <li key={item.href} className="group relative">
                      <Link
                        href={item.href}
                        className={`ic-page-scroll mx-8 flex py-2 font-medium text-white group-hover:text-white lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 transition-opacity duration-200 ${
                          activeSection === item.href.replace('#', '') ? 'active opacity-100' : ''
                        }`}
                        role="menuitem"
                        onClick={() => handleNavClick(item.href)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            
            <div className="flex items-center justify-end pr-[52px] lg:pr-0">
              <div className="hidden sm:flex">
                <Link
                  href="#contact"
                  className="btn-navbar ml-5 px-6 py-3 rounded-md bg-primary-color bg-opacity-20 font-medium text-white hover:bg-opacity-100 hover:text-primary transition-all duration-300"
                  role="button"
                  onClick={() => handleNavClick('#contact')}
                >
                  Get in touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}