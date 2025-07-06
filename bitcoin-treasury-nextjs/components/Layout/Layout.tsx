'use client'

import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'
import ScrollToTop from '../UI/ScrollToTop'

interface LayoutProps {
  children: ReactNode
  activeSection?: string
}

export default function Layout({ children, activeSection = 'home' }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header activeSection={activeSection} />
      <main className="flex-1 pt-[80px]">
        {children}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}