import React from 'react'
import './About.css'
import about_img from '../../assets/ColMongComZar-2.jpg'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  
  return (
    <div className='about'>
        
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            {/* <img src={play_icon} alt="" className='play-icon' onClick={()=> {setPlayState(true)}} /> */}
            <img src={play_icon} alt="" className='play-icon'  />
        </div>
        <div className="about-right">
           <h3>About MONGOLIAN COMMUNITY OF COLORADO</h3>
           <h2>Nurturing Tomorrow's Leaders Today</h2>
           <p>The purpose of the Association is to unite, support, and coordinate the efforts, initiatives, and activities of Mongolians residing
             in the state of Colorado—including those of community organizations, groups, and individuals—on a voluntary basis. </p>
            <p>The Association seeks to serve and represent the collective interests of the Mongolian community in Colorado,</p>

             <p> by fostering cooperation and organizing various social and cultural events that promote engagement 
              between Mongolian and American citizens.</p>
        </div>
    </div>
  )
}

export default About