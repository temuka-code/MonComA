import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/yanjmaa.jpg'
import user_2 from '../../assets/and.jpg'
import user_3 from '../../assets/ericaTaylor.jpg'
import user_4 from '../../assets/mongolsurguuli.png'

const Testimonials = () => {

const slider=useRef();
let translatX=0;
const slideForward=()=>{
    if (translatX>-50){
        translatX-=25;
    }
    slider.current.style.transform=`translateX(${translatX}%)`
}
const slideBackward=()=>{
     if (translatX<0){
        translatX+=25;
    }
    slider.current.style.transform=`translateX(${translatX}%)`
    
}

  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
        <div className="slider">
            <ul ref={slider}>
                <li>
                 <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>UB Sky Mary</h3>
                            <span>Colorado, USA</span>
                        </div>
                    </div>
                    <p>First ever Mongolian Community in Colorado that brings culture, sports and celebration together since 1990's.
                        Thank you for the dedicating your precious time for those who volunteered and serve to our community.</p>
                 </div>
                </li>
                <li>
                 <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>Anda Erdenebileg </h3>
                            <span>Saarbrücken, Germany</span>
                        </div>
                    </div>
                    <p>Сайн байцгаана уу? Миний дэглэсэн БИ ЧАДНА бүжгийг олонд түгээсэн КММХ (MCC) ны Ерөнхийлөгч Оюунтүлхүүр танд их баярлалаа. 
                        Мөн постыг маш олон хүн үзэж LIKE дарж, олон сайхан COMMENT бичсэнд маш их баярлалаа. Маш их урам зориг авлаа..</p>
                 </div>
                </li>
                <li>
                 <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Erika Taylor</h3>
                            <span>Colorado, USA</span>
                        </div>
                    </div>
                    <p>Our friend Jim said about Naadam that it is like the 4th of July, a County Fair and a rodeo all rolled into one. I think that just about sums it up. One of my favorite days of the year. Thank you, Mongolian Community of Colorado, for a wonderful day, 
                        we were so proud to represent Denver Sister Cities International and the Ulaanbaatar Committee and grateful for the opportunity. 🇲🇳🇺🇸</p>
                 </div>
                </li>
                <li>
                 <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>Mongolian School of Colorado</h3>
                            <span>Colorado, USA</span>
                        </div>
                    </div>
                    <p>Thank you Mongolian Community of Colorado for organizing this year’s Naadam Festival and bringing our community together. 
                        We know this was a team effort and lot of work! Congrats to all the participants and winners from the competitions.</p>
                 </div>
                </li>
                
            </ul>
        </div>
    </div>
  )
}

export default Testimonials