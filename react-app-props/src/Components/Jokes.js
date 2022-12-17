import React from 'react'

let counter=1;

export default function Joke(props){
    console.log(counter)
    return(
        <section className='Joke-sec'>
            <div><h1>{counter++}</h1></div>
            <div className='details'>
            <div>{props.props.Setup}</div>
            <div>{props.props.Punchline}</div>
            </div>
            
        </section>

    )
}