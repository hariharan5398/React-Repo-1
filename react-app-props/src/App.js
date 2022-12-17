import logo from './logo.svg';
import './App.css';
import jokesdata from './data/data';
import Joke from './Components/Jokes';
function App() {

  let [dat1, dat2, dat3, dat4, dat5] = jokesdata;
  return (
    <div className='main'>
    <Joke  props={dat1} />
    <Joke  props={dat2} />
    <Joke  props={dat3} />
    <Joke  props={dat4} />
    <Joke  props={dat5} />

    </div>
  );
}

export default App;
