"use client";
// components/Navbar.js
import Link from 'next/link';
import React, { useState } from 'react';

// Heroicons User Icon SVG (outline)
function UserIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M15.75 7.5a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 19.5a7.5 7.5 0 0115 0v.75a.75.75 0 01-.75.75h-13.5a.75.75 0 01-.75-.75V19.5z" />
    </svg>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    // Make navbar full width
    <nav className="bg-black text-white shadow-md w-full">
      {/* Content container (optional: keeps content centered and max width) */}
      <div className="flex items-center justify-between h-16 px-4 md:px-8 w-full">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-wide hover:text-cyan-400 transition">
          Smart Parking
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/dashboard" className="px-3 py-2 rounded hover:bg-cyan-700 hover:text-white transition">
            Dashboards
          </Link>
          <Link href="/parking-lots" className="px-3 py-2 rounded hover:bg-cyan-700 hover:text-white transition">
            Parking Lots
          </Link>
          <Link href="/analytics" className="px-3 py-2 rounded hover:bg-cyan-700 hover:text-white transition">
            Analytics
          </Link>
          <Link href="/settings" className="px-3 py-2 rounded hover:bg-cyan-700 hover:text-white transition">
            Settings
          </Link>
          {/* User Icon */}
          <button className="ml-4 p-2 rounded-full hover:bg-cyan-700 transition" aria-label="User">
            <UserIcon />
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center p-2 rounded hover:bg-cyan-700 transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black px-4 pb-4">
          <Link href="/dashboard" className="block px-3 py-2 rounded hover:bg-cyan-700 hover:text-white transition">
            Dashboards
          </Link>
          <Link href="/parking-lots" className="block px-3 py-2 rounded hover:bg-cyan-700 hover:text-white transition">
            Parking Lots
          </Link>
          <Link href="/analytics" className="block px-3 py-2 rounded hover:bg-cyan-700 hover:text-white transition">
            Analytics
          </Link>
          <Link href="/settings" className="block px-3 py-2 rounded hover:bg-cyan-700 hover:text-white transition">
            Settings
          </Link>
          <button className="mt-2 p-2 rounded-full hover:bg-cyan-700 transition" aria-label="User">
            <UserIcon />
          </button>
        </div>
      )}
    </nav>
  );
}