import React from 'react'
import './Footer.css'
import facebook from '../../assets/facebook.png'


const socialLinks=[{
  href:'https://www.facebook.com/colomongols',
  icon:<img src={facebook} alt="" className='footerlogo'>Facebook</img>,
    alt: 'Facebook'
}]
const Footer = () => {
  return (
    <div className='footer'>
      {/* {socialLinks.map(({href,icon}, key)=>(
        <a 
        key={key}
        href={href}
        
        >
          {icon}
        </a>

      ))} */}
        <p>© 2025 Mongolian Community of Colorado. </p>
        {/* <img src={facebook} alt="" className='footerlogo'/>Facebook */}
        <ul>
            <li>Terms of Services</li>
            <li>Privacy Policy</li>
        </ul>
    </div>
  )
}

export default Footer