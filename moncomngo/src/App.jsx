import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Community from './Components/Community/Community'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'


const App = () => {
const [playState, setPlayState]=useState(false);


  return (
    <div>
      <Navbar/>
      <Hero/>

      <div className="container">
        <Title subTitle='Our Community' title='What We Offer'/>
        <Community/>
        <About setPlayState={setPlayState}/>
        <Title subTitle='Gallery' title='Event Photos'/>
        <Campus/>
        <Title subTitle='TESTIMONIALS' title='What Our Community says'/>
        <Testimonials/>
        <Title subTitle ='Contact Us' title='Get in Touch'/>
        <Contact/>
        <Footer/>
      </div>

    <VideoPlayer playState={playState} setPlayState={setPlayState}/>  
    </div>
  )
}

export default App
