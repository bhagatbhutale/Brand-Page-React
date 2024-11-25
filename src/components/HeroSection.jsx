import React from 'react'

const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>Your FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-button">
          <button>Show Now</button>
          <button className='secondary-btn'>Categiry</button>
        </div>

        <div className="shoping">
          <p>Also Available Now</p>
        </div>

        <div className="brand-icon">
          <img src="/images/amazon.png" alt="amazon-logo" />
          <img src="/images/flipkart.png" alt="amazon-logo" />
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/hero-image.png" alt="" />
      </div>
    </main>
  );
}

export default HeroSection
