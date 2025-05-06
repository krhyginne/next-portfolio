import React from 'react'
import Link from 'next/link';

export default function AboutPage() {
    return (
      <div className="bg-[#121212] text-white min-h-screen px-4 py-8">
        <section>
          <div className="col-span-7 place-self-center text-center sm:text-left">
            <h1 className='mb-4 text-4xl font-extrabold'>About Me</h1>
            <p className='text-base sm:text-lg mb-6 lg:text-xl'>
              My name is Krhyginne Tamoria. I am a fourth-year student at UCSD.
            </p>
            <p>
                View my <Link href="/projects" className="text-blue-400 underline">Projects</Link>
            </p>        
          </div>
        </section>
      </div>
    );
  }