import React from 'react'

export default function Box(props){


    let bgcolor = {
     backgroundColor :   props.on ? "black" : "tomato",
     color : props.on ? "white" : "black"
    }
    

    return(
        <div className="Box" onClick={()=>props.toggler(props.id)} style={bgcolor}></div>
    )
}