import './App.css';

import allOnions from './images/all_onions.png';
import top4 from './images/top_4.png';
import bottom4 from './images/bottom_4.png';

function App() {
  return (
    <div className='center-horizontal'>
      <div className='center-vertical'>
        <img className='border-img' src={top4} alt=""/>

        <div className='text-content'>
          <h1 className='welcome-sign'>Welcome to</h1>
          <h1>Onion City Grocery</h1>
          <p>We've got a special deal on <span style={{fontWeight:'bold', color:'#4EAB10'}}>onions</span> today.
            Pick your other groceries first, 
            then we'll give you your special onion!</p>
          <button className='start-button'>Let's go!</button> {/* Add handler */}
        </div>
        
        <img className='border-img' src={bottom4} alt=""/>
      </div>
      </div>
  );
}

export default App;
