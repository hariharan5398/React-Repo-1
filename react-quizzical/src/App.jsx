import React from 'react'
import './App.css'
import Quiz from './assets/Components/Quiz'
import Home from './assets/Components/Home'
import Category from './assets/Components/Category'


function App() {
 
  // start - To change from Home screen
  const [start, setStart] = React.useState(()=> true)

  return (
    <div className="w-screen h-screen flex font-karla">

      {/* Home Screen Component */}
      {/* { start && <Home setStart={setStart}/> }
      { !start && <Quiz />} */}
      {Category}
    </div>
  )
}

export default App
