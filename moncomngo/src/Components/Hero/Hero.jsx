import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>We foster cultural ideals and aspirations</h1>
            <p>
                The Association seeks to serve and represent the collective interests of the Mongolian community in Colorado by fostering cooperation 
                and organizing various social and cultural events that promote engagement between Mongolian and American citizens.
            </p>
            {/* <button className='btn'>Explore more <img src= {dark_arrow} alt=""/> 

            </button> */}
        </div>

    </div>
  )
}

export default Hero