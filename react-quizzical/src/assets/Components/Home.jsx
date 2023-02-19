import React from "react";


export default function Home(props){

    // destructuring props
    const {setStart} = props

    function displayQuiz(){
        setStart(false)

    }


    return (

        <div className="text-center m-auto" >
            <h1 className=" text-3xl font-bold my-1">Quizzical</h1>
            <p>Quizzzz timeeee, Fun time !!</p>
            <button onClick={()=>displayQuiz()} className=" mt-2 text-gray-100 px-5 py-2 rounded-xl bg-blue-500">Start quiz</button>
        </div>
    )


}