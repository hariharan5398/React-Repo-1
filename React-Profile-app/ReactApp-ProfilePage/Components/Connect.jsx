import React from 'react'
import ReactDOM from 'react-dom/client'
import './components.css'
import mail from '../Images/Icons-connect/mail-icon.svg'

function Connect(){

    return(
        <div className='connect-section'>
            <button className='Btn-connect'><img src={mail}></img> Email</button>
            <button className='Btn-connect'>Linkedin</button>
        </div>
    )
}


export default Connect;