import React from 'react'


export default function Adder(){

    let [val, setVal] = React.useState(0)

    function minus(){
        setVal((ele)=> ele -1)
    }

    function add(){
        setVal((ele)=> ele +1)
    }
    // setInterval(add, 10000)

    return (
        <div className="counter">
            <button className="counter--minus" onClick={minus}>–</button>
            <div className="counter--count">
                <h1>{val}</h1>
            </div>
            <button className="counter--plus" onClick={add}>+</button>
        </div>
    )
}