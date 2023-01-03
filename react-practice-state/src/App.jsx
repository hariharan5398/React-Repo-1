import React from 'react'
import './App.css'
import Box from './Components/box'
import boxData from './Components/boxData'
function App() {
  const [boxArray, setBoxArray] = React.useState(boxData)

  function toggle(id){
    console.log(id)
    setBoxArray( 
      (prevBox)=>{
        return prevBox.map(
          (ele)=>{
            return ele.id === id ? { ...ele, on: !ele.on} : ele
          }
          )
      }


    )
}

  const boxfiller = boxArray.map(
    (ele)=>{
      return <Box key={ele.id} id={ele.id} on={ele.on} toggler={toggle}/>
    }
  )


  
  return (
    <div className="App">
      {boxfiller}
    </div>
  )
}

export default App
