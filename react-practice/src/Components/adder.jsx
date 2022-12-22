import React from 'react'


export default function Adder(){

    let [val, setVal] = React.useState(0)

    function minus(){
        setVal((ele)=> ele -1)
    }

    function add(){
        setVal((ele)=> ele +1)
    }


    return (
        <div>
        <button onClick={minus}>minus</button>
        <div>{val}</div>
        <button onClick={add}>add</button>
        </div>
    )
}