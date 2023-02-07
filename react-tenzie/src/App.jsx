import React from 'react'
import Header from './Components/Header'
import Tile from './Components/Tile'
import './App.css'

function App() {
  let initialArray = new Array()
  const TileNos = 10
  const [num, Setnum] = React.useState(()=>Initializer()) //Actual Value in the Tile
  
  
  // Returns a random No.(1 to 8)
  function getRandomNum(){
    return Math.ceil( Math.random() * 9 )
  }
  
  // Sets tehe Initial Array - Size 8
  function Initializer(){
    for(let i=0; i<TileNos; i++){
        initialArray.push(getRandomNum())
      }
      return initialArray
    }
    
   

  
  return (
    <div className="App container ">
      <Header />
      <Tile 
      num={num}
      Setnum={Setnum}
      rand={getRandomNum}
      />

    </div>
    )
}

export default App
