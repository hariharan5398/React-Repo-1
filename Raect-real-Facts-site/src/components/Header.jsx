import React from 'react';
import "../index.css"
import reactLogo from '../../public/react-icon-small.png'

export default function Header(props){
    console.log(props)
    const {tog, setTog} = props

    return (

        <div className={` flex justify-between px-5 md:px-10 py-5 drop-shadow-2xl shadow-[0_0_24px_0_rgb(0,3,87,0.3)] border-gray-400 ${tog && "bg-gray-700"}`}>
            <div className='flex align-middle my-auto'>
                <img src={reactLogo} className='object-cover h-10 w-10 mx-2' ></img>
                <h1 className="text-lg text-cyan-400 my-auto font-bold">ReactFacts</h1>
            </div>
            <div className='flex align-middle justify-between'>
            <p className=' mr-1 my-auto pb-2 inline-block text-cyan-400 text-xs'>light</p>
            <div className='border border-lime-800 w-10 h-5 relative inline-block my-1'>
            
                <label htmlFor='check' >
                    
                    <input id="check" type="checkbox" class=' sr-only peer' checked={tog} onChange={()=>setTog((prev)=>!prev)}></input>
                    <span className=' bg-cyan-500 absolute w-5 h-full  peer-checked:left-5 peer-checked:bg-cyan-900'></span>
                </label>
                
            </div>
            <p className="inline-block ml-1 my-auto pb-2 text-xs text-cyan-400">Dark</p>
            </div>
        </div>
    )
}