import './App.css'
import DeathStar from './Images/DeathStar.png'

function App() {
  return (
    <div className='App'>
      <h1 className='title'>Space project.</h1>
      <h1 className='typewriter title'>In progress</h1>
      <img src={DeathStar} className='deathStar' />
    </div>
  );
}

export default App;
