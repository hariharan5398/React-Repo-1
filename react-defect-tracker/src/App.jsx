import React from 'react'
import './App.css'
import Header from '../public/Components/Header'
import Filter from '../public/Components/Filter'
import Details from '../public/Components/DefectDetail'
function App() {

  return (
    <div className="App">
      <Header />
      <Filter />
      <Details />
    </div>
  )
}

export default App
