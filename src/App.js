import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='center-horizontal'>
      <div className='center-vertical'>
        {/* Insert image */}
        <h1 className='welcome-sign'>Welcome to</h1>
        <h1>Onion City Grocery</h1>
        <p>We've got a special deal on <span style={{fontWeight:'bold', color:'#4EAB10'}}>onions</span> today.
          Pick your other groceries first, 
          then we'll give you your special onion!</p>
        <button>Let's go!</button> {/* Add handler */}
      </div>
      </div>
  );
}

export default App;
