'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Youtube, Music } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo and Company Info */}
        <div className="col-span-1">
          <Link href="/" className="flex items-center gap-2 mb-4">
            <img src="/Images/One-of-us-color.svg" alt="OneOfUs" className="h-28" />
          </Link>
          {/* <p className="text-sm mb-6">Turn your thoughts into actionable notes.</p> */}
          <p className="text-xs">© 2025 Copyright all rights reserved.</p>
     
        </div>

       
      </div>
    </footer>
  );
};

export default Footer;