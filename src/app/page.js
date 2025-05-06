//homepage
import Link from 'next/link'
import React from 'react'
import Image from "next/image";
import HeroSection from '../components/hero.jsx'; // Corrected path
import Navbar from '../components/navbar.jsx'; // Corrected path

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col bg-[#121212]'>
      <Navbar/>
      <div className="container mx-auto px-12 py-4">
        <HeroSection/>
      </div>
    </main>
  );
}
