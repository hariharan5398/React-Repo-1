import React from 'react'
import ReactDOM from 'react-dom/client'
import './components.css'
import mail from '../Images/Icons-connect/mail-Icon.svg'
import linkedin from '../Images/Icons-connect/linkedin-icon.svg'


function Connect(){

    return(
        <div className='connect-section'>
            <button className='Btn-connect Btn-mail'><img src={mail}></img> Email</button>
            <button className='Btn-connect Btn-linkedin'><img src={linkedin}></img> Linkedin</button>
        </div>
    )
}


export default Connect;