import React from 'react';

const HeroSection = () => {
  return (
    <section>
        <div>
          <div className="col-span-7 place-self-center text-center sm:text-left">
            <h1 className='text-white mb-4 text-4xl font-extrabold'> 
            hi, my name is Krhyginne!
            </h1>
            <p className='text-white text-base sm:text-lg mb-6 lg:text-xl'>
            a UX Designer committed to growth, driven with empathy & curiosity to create human-centered solutions. Currently @ Asian Connections Hub
            </p>
            </div>
          <div>
            <button className='px-8 py-4 w-full sm:w-fit rounded-full mr-4 bg-white hover:ng-slate-20'>Contact Me</button>
          </div>
        </div>
    </section> 
  );
};

export default HeroSection;