import React from 'react';
import "../index.css"


export default function Header(){

    const [toggle, setToggle] = React.useState(false)

    return (

        <div className='bg-white flex justify-between px-10 py-5 border-b-4 border-gray-400'>
            <div className='flex align-middle my-auto'>
                <img src="../../public/react-icon-small.png" className='object-cover h-10 w-10 mx-2' ></img>
                <h1 className="text-lg text-cyan-400 my-auto font-bold">ReactFacts</h1>
            </div>
            <div className='flex align-middle justify-between'>
            <p className=' mr-1 my-auto py-auto inline-block'>light</p>
            <div className='border border-lime-800 w-10 h-5 relative inline-block my-1'>
            
                <label htmlFor='check' >
                    
                    <input id="check" type="checkbox" class=' sr-only peer' checked={toggle} onClick={()=>setToggle((prev)=>!prev)}></input>
                    <span className=' bg-red-500 absolute w-5 h-full  peer-checked:left-5 peer-checked:bg-red-900'></span>
                </label>
                
            </div>
            <p className='inline-block ml-1 my-auto'>Dark</p>
            </div>
        </div>
    )
}