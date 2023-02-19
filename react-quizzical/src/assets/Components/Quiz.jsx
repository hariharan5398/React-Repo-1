import { data } from 'autoprefixer';
import React from 'react';
import { nanoid } from 'nanoid';

export default function Quiz(){
    // API Used
    // https://opentdb.com/api_config.php
    const [ quesArray, setQuesArray ] = React.useState(()=>[])

    // Fetch data from Api only on the initial render
    console.log(quesArray)
    React.useEffect(
        // ()=>{
        //     fetch("https://opentdb.com/api.php?amount=10")
        // .then(response => response.json())
        // .then(data => quesArray = [...data.results])
        // console.log("temp", quesArray)
        // setTimeout(()=>console.log(quesArray), 5000)
        // },[]

        ()=>{
            
            (
                async ()=>{
                    console.log(1)
                let response = await fetch("https://opentdb.com/api.php?amount=10")
                let data = await response.json()
                console.log(data.results)
                setQuesArray([...data.results])
            }

            )()
        },[]


    )

    // console.log(quesArray)

    // Get the randomindex to insert right option in options array
    function getRandomIndex(){
        return Math.ceil( Math.random() * 3 )
    }


    function blockAnswer(e){
        
        e.target.parentNode.classList.add("bg-blue-500")
        e.target.parentNode.classList.add("text-white")

        
    }

    // Merge both correct & incorrectoption create an array
    function options(element, key){
        let optionArray = [...element.incorrect_answers]

        //Inserts correct ansewer in the random index
        optionArray.splice(getRandomIndex(), 0 , element.correct_answer)
        return (
            optionArray.map(
                (optionValue) =>{
         

                    return (
                        <div>
                        <input className='hidden peer' key={key} type="radio" id={optionValue} value={optionValue} name={key}/>
                        <label htmlFor={optionValue} className=" cursor-pointer peer-checked:bg-blue-600">
                        <div className='m-2 border-2 border-blue-600 rounded-full px-2 peer-checked:bg-orange-500'>{optionValue}</div>
                        
                        </label>
                        </div>
                    )
                }
            )
        )

    }

    let ques = quesArray.map(
        (element)=>{
            let uniqueKey = nanoid();
            return (
                <div key={uniqueKey} className=" my-2 mx-4 p-2 border-b-2">
                    <h1>
                        {element.question}
                    </h1>
                    <div className=' flex flex-wrap'>
                        {options(element, uniqueKey)}
                    </div>
                    
                </div>
            )
        }
    )

    return(
        <div>
            <h1>{ques}</h1>
        </div>
    )
}