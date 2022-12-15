import react from 'react'
import About from '../Components/About'
import Connect from '../Components/Connect'
import Interests from '../Components/Interests'
import NameProfile from '../Components/NameSection'
import SocialIcon from '../Components/SocialIcon'
import ProfilePicture from '../Components/ProfileDP'
import './App.css'

function App() {
  
  return (
    <div className='App-Section'>
      <ProfilePicture />
      <NameProfile />
      <Connect />
      <About />
      <Interests />
      <SocialIcon />
    </div>
  )
}

export default App
