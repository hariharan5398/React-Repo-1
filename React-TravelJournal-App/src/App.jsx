import React from 'react'
import './App.css'
import CardTile from '../Components/Card'
import Header from '../Components/Header'
import data from '../public/data'
function App() {
  
  let cards = data.map(
    (element)=>{
      return <CardTile props={element}/>
    }
  )

  return (
    <div className="App">
      <Header />
      <div>{cards}</div>
    </div>
  )
}

export default App
