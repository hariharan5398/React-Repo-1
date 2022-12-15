import React from 'react'
import ReactDOM from 'react-dom/client'
import displayPic from '../Images/react-display-picture-1.png'
import './components.css'

function ProfilePicture(){
    return(
        <div className='dp-section'>
        <img src={displayPic} alt="display picture" className='display-pic'/>
        </div>
    )
}

export default ProfilePicture