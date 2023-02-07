import React from 'react'
import './App.css'
import Header from './components/Header'
import Body from './components/Body'
import './index.css'



function App() {
  
  const [toggle, setToggle] = React.useState(false)

  return (
    <div className={`${toggle && "bg-gray-700"} h-full font-display`}>
      <Header 
        tog={toggle}
        setTog={setToggle}
      />
      <Body 
        tog={toggle}
      />
    </div>
  )
}

export default App
