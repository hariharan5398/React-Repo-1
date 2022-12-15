import React from 'react'
import ReactDOM from 'react-dom/client'
import twitterIcon from '../Images/social-Icons/Twitter Icon.svg'
import fbIcon from '../Images/social-Icons/Facebook Icon.svg'
import instaIcon from '../Images/social-Icons/Instagram Icon.svg'
import githIcon from '../Images/social-Icons/GitHub Icon.svg'

function SocialIcon(){
    return(
        <div className='socialIcon'>
            <div><img src={twitterIcon} alt="Twitter" /></div>
            <div><img src={fbIcon} alt="facebook" /></div>
            <div><img src={instaIcon} alt="Instagram" /></div>
            <div><img src={githIcon} alt="Github" /></div>
        </div>
    )
}

export default SocialIcon