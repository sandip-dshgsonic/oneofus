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
            <img src="/Images/logo-white.svg" alt="TalkNotes" className="h-8" />
          </Link>
          <p className="text-sm mb-6">Turn your thoughts into actionable notes.</p>
          <p className="text-xs">© 2024 - talknotes.io All rights reserved.</p>
          <div className="flex gap-6 mt-6">
            <Link href="#" className="hover:text-white transition-colors">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              <Twitter size={20} />
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              <Youtube size={20} />
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              <Music size={20} />
            </Link>
          </div>
        </div>

        {/* Use Cases */}
        <div className="col-span-1">
          <h3 className="text-white font-semibold mb-4">USE CASES</h3>
          <ul className="space-y-3">
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Brainstorming
              </Link>
            </li>
          </ul>
        </div>

        {/* Links */}
        <div className="col-span-1">
          <h3 className="text-white font-semibold mb-4">LINKS</h3>
          <ul className="space-y-3">
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Reviews
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Download
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Affiliate Program
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                F.A.Q
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Learn */}
        <div className="col-span-1">
          <h3 className="text-white font-semibold mb-4">LEARN</h3>
          <ul className="space-y-3">
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                How to transcribe voice memos
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Brainstorming AI
              </Link>
            </li>
          </ul>

          <h3 className="text-white font-semibold mt-8 mb-4">FREE TOOLS</h3>
          <ul className="space-y-3">
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Voice memo transcription
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                MP3 to text converter
              </Link>
            </li>
          </ul>
        </div>

        {/* Contacts and Legal */}
        <div className="col-span-1">
          <h3 className="text-white font-semibold mb-4">CONTACTS</h3>
          <p className="mb-2">support@talknotes.io</p>
          <p className="mb-2">Kanrankoulukuja 3,</p>
          <p className="mb-4">FI-00100, HELSINKI, FINLAND</p>
          <p>+1 737 320 3335</p>

          <h3 className="text-white font-semibold mt-8 mb-4">LEGAL</h3>
          <ul className="space-y-3">
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Facebook Disclaimer
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;