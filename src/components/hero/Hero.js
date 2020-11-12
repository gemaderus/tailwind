import React from 'react';
import HeroIllustration from '../illustration/HeroIllustration'

function Hero() {
  return(
    <section className="sm:flex justify-between items-center py-3 md:px-6 px-3 container m-auto">
      <div className="sm:w-1/2">
        <h1 className="text-3xl md:text-4xl sm:text-2xl xs:text-3xl">Discover the world’s top designers & creatives</h1>
        <p className="mt-4">Dribbble is the leading destination to find & showcase creative work and home to the world's best design professionals.</p>
        <button className="button-primary md:w-auto">Sign up</button>
      </div>
      <div className="sm:w-1/2 mt-3 sm:mt-0">
        <HeroIllustration />
      </div>
    </section>
  )
}

export default Hero;