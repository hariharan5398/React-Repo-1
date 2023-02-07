import React from 'react'





export default function Body(props){
        
    const {tog} = props;


    return (
        <div className={` pb-5 pt-10 pl-5 md:pl-16 bg-logolight ${tog && " bg-logoDark"} bg-no-repeat bg-right h-full`}>

        <h1 className={` text-2xl md:text-3xl font-bold text-gray-700 ${tog && " text-slate-300"}`}>Fun facts about React</h1>
        <ul>
            <li className={`ml-12 my-8 list-disc marker:text-cyan-500 marker:text-3xl ${tog && " text-slate-300"}`}>Was first released in 2013</li>
            <li className={`ml-12 my-8 list-disc marker:text-cyan-500 marker:text-3xl ${tog && " text-slate-300"}`}>Was originally created by Jordan Walke</li>
            <li className={`ml-12 my-8 list-disc marker:text-cyan-500 marker:text-3xl ${tog && " text-slate-300"}`}>Has well over 100K stars on GitHub</li>
            <li className={`ml-12 my-8 list-disc marker:text-cyan-500 marker:text-3xl ${tog && " text-slate-300"}`}>Is maintained by Facebook</li>
            <li className={`ml-12 my-8 list-disc marker:text-cyan-500 marker:text-3xl ${tog && " text-slate-300"}`}>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>

        </div>

    )
}