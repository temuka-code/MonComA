import React from 'react'
import './Community.css'
import program_1 from '../../assets/mongolSurguul.jpg'
import program_2 from '../../assets/ajnaiEnsemble.jpg'
import program_3 from '../../assets/uranbiirExhibition.jpg'

import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/clef_898929.png'
import program_icon_3 from '../../assets/drawing.png'

const Programs = () => {
  return (
    <div className='programs'>
        <div className="program">
            <img src= {program_1} alt =""/>
            <div className='caption'>
                <img src={program_icon_1} alt="" />
                <p>Mongolian School of Colorado</p>
            </div>

        </div>
        <div className="program">
            <img src= {program_2} alt =""/>
            <div className='caption'>
                <img src={program_icon_2} alt="" />
                <p>The Ajnai Morin Khuur Ensemble</p>
            </div>
        </div>
        <div className="program">
            <img src= {program_3} alt =""/>
            <div className='caption'>
                <img src={program_icon_3} alt="" />
                <p> Uran Biir </p>
            </div>
        </div>
    </div>
  )
}

export default Programs