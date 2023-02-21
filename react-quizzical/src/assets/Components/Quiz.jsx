import { data } from 'autoprefixer';
import React from 'react';
import { nanoid } from 'nanoid';

export default function Quiz(){
    // API Used
    // https://opentdb.com/api_config.php
    // const [ quesArray, setQuesArray ] = React.useState(()=>[])
    const quesArray = React.useRef([])
    const blockedAnswer = React.useRef({})
    const correctAnswer = React.useRef({})
    let [ques, setQues] = React.useState(()=>[])
    const [evaluated, setEvaluated] = React.useState(()=>false)
    let mark = React.useRef(undefined);
    

    // Fetch data from Api only on the initial render
    console.log(quesArray)
    React.useEffect(
       

        ()=>{
            
            (
                async ()=>{
                    console.log(1)
                let response = await fetch("https://opentdb.com/api.php?amount=10")
                let data = await response.json()
                quesArray.current = [...data.results]

                setTimeout(()=>{
                    setQues( ()=>{
                        return quesArray.current.map(
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

                    } )
                },500)
                
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
                        <input 
                        className='hidden peer' 
                        key={key} 
                        type="radio" 
                        id={optionValue+key} 
                        value={optionValue} 
                        name={key} 
                        onClick={(e)=>onChangeAns(e)}
                        disabled={evaluated}
                         />
                        <div id={key+optionValue} className='m-2 border-2 border-blue-600 rounded-full px-2 peer-checked:font-bold peer-checked:bg-blue-600 peer-checked:text-white peer-disabled::bg-gray-400' disabled={evaluated}>{optionValue}</div>
                        
                        </label>
                        </div>
                    )
                }
            )
        )

    }

    function evaluate(){

        if(Object.keys(blockedAnswer.current).length == quesArray.current.length){
            mark.current=0
            for (let key of Object.keys(blockedAnswer.current)){
                let pickerCorrect = key+correctAnswer.current[key]
                let pickerIncorrect = key+blockedAnswer.current[key]

                // EValuate the answers
                if(blockedAnswer.current[key] == correctAnswer.current[key]){
                    mark.current+=1
                    
                    // console.log(picker, document.getElementById(picker))
                    document.getElementById(pickerCorrect).classList.add("peer-checked:border-green-600")
                    document.getElementById(pickerCorrect).classList.add("peer-checked:bg-green-600")
                    // setQues((prev)=>prev)
                }else{
                    document.getElementById(pickerIncorrect).classList.add("peer-checked:border-red-600")
                    document.getElementById(pickerIncorrect).classList.add("peer-checked:bg-red-600")
                    document.getElementById(pickerCorrect).classList.add("border-green-600")
                    document.getElementById(pickerCorrect).classList.add("bg-green-600")
                    document.getElementById(pickerCorrect).classList.add("text-white")
                    document.getElementById(pickerCorrect).classList.add("font-bold")


                }
            }
            
            console.log(mark.current)
            setEvaluated((prev)=>!prev)
        }

        
    }

    const spinner = (
        <div class="text-center mt-48">
    <div role="status">
        <svg aria-hidden="true" class="inline w-10 h-10 md:w-20 md:h-20 lg:w-30 lg:h-30 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <span class="sr-only">Loading...</span>
    </div>
</div>
    )


    console.log("mark", mark.current)

    return(
        <div className=' w-screen'>
        
            { ques.length == 0 ? spinner : <div>{ques}</div> }
            { ques.length > 0 &&  <button 
            className='my-4 md:mx-96 w-screen h-14 md:w-44 px-2 md:border-2 md:rounded-full hover:bg-blue-700 font-extrabold bg-blue-500 text-white text-lg' 
            onClick={()=>evaluate()}
            disabled={evaluated}
            >
            { ques.length > 0 ? (evaluated ?   `Your Score : ${mark.current}` : "Submit" ) : ""} 
            </button>}
        </div>
    )
}