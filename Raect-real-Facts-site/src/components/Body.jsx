import React from 'react'





export default function Body(){



    return (
        <div className='ml-10 my-16 mx-auto bg-logolight bg-no-repeat bg-right'>

        <h1 className=' text-2xl md:text-3xl font-bold text-gray-700'>Fun facts about React</h1>
        <ul>
            <li className='ml-12 my-8 list-disc marker:text-cyan-500 marker:text-3xl'>Was first released in 2013</li>
            <li className='ml-12 my-8 list-disc marker:text-cyan-500 marker:text-3xl'>Was originally created by Jordan Walke</li>
            <li className='ml-12 my-8 list-disc marker:text-cyan-500 marker:text-3xl'>Has well over 100K stars on GitHub</li>
            <li className='ml-12 my-8 list-disc marker:text-cyan-500 marker:text-3xl'>Is maintained by Facebook</li>
            <li className='ml-12 my-8 list-disc marker:text-cyan-500 marker:text-3xl'>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>

        </div>

    )
}