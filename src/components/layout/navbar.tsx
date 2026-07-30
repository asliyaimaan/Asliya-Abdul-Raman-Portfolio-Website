'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Experience', path: '/experience' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#080a22]/90 backdrop-blur-md border-b border-[#31335b] px-6 sm:px-12 py-2">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo Link — Reduced vertical padding and constrained logo height to keep navbar thin while keeping logo large */}
        <Link 
          href="/" 
          className="flex items-center group opacity-90 hover:opacity-100 transition-opacity py-0.5 overflow-hidden"
        >
          <Image 
            src="/images/aar-icon.png" 
            alt="Asliya.dev Logo" 
            width={320} 
            height={80} 
            priority
            className="h-12 w-auto max-w-none object-contain scale-125 origin-left"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.path;

            return (
              <Link
                key={item.path}
                href={item.path}
                className={`px-4 py-1.5 rounded-[10px] text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-[#23244a] text-white shadow-sm'
                    : 'text-gray-400 hover:text-white hover:bg-white/[0.03]'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-xl border border-[#31335b] bg-[#080a22] text-gray-300 hover:text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 rounded-2xl p-3 shadow-xl flex flex-col gap-1.5">
          {navItems.map((item) => {
            const isActive = pathname === item.path;

            return (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}