import { data } from 'autoprefixer';
import React from 'react';
import { nanoid } from 'nanoid';

export default function Quiz(){
    // API Used
    // https://opentdb.com/api_config.php
    const [ quesArray, setQuesArray ] = React.useState(()=>[])
    const blockedAnswer = React.useRef({})
    const correctAnswer = React.useRef({})
    let mark = 0;
    

    // Fetch data from Api only on the initial render
    console.log(quesArray)
    React.useEffect(
       

        ()=>{
            
            (
                async ()=>{
                    console.log(1)
                let response = await fetch("https://opentdb.com/api.php?amount=10")
                let data = await response.json()
                setQuesArray([...data.results])
                
            }

            )()
        },[]


    )

    

    // Get the randomindex to insert right option in options array
    function getRandomIndex(){
        return Math.ceil( Math.random() * 3 )
    }


    function onChangeAns(e){
        
        blockedAnswer.current[e.target.name] = e.target.value
        // console.log(blockedAnswer)
    }

    // Merge both correct & incorrectoption create an array
    function options(element, key){
        let optionArray = [...element.incorrect_answers]
        correctAnswer.current[key] = element.correct_answer
        //Inserts correct ansewer in the random index
        optionArray.splice(getRandomIndex(), 0 , element.correct_answer)
        return (
            optionArray.map(
                (optionValue, index) =>{
         

                    return (
                        <div key={key+index} >
                        
                        <label htmlFor={optionValue+key} className="cursor-pointer"   >
                        <input className='hidden peer' key={key} type="radio" id={optionValue+key} value={optionValue} name={key} onClick={(e)=>onChangeAns(e)} />
                        <div className='m-2 border-2 border-blue-600 rounded-full px-2 peer-checked:font-bold peer-checked:bg-blue-600 peer-checked:text-white'>{optionValue}</div>
                        
                        </label>
                        </div>
                    )
                }
            )
        )

    }

    function evaluate(){

        if(Object.keys(blockedAnswer.current).length == quesArray.length){

            for (let key of Object.keys(blockedAnswer.current)){

                if(blockedAnswer.current[key] == correctAnswer.current[key]){
                    mark+=1
                }
            }
            console.log(mark)
        }

        

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
        <div className=' w-screen'>
            <h1>{ques}</h1>
            <button className=' my-4 mx-auto px-2 border-2 rounded-full bg-blue-500 text-white text-lg' onClick={()=>evaluate()}>{ques ? "Submit" : ""} </button>
        </div>
    )
}