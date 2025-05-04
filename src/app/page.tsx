//homepage
import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div className="p-4">
    <h1>Welcome to my Homepage</h1>
    <Link href="/about"> About </Link>
    </div>
  );  
};

export default Home;