
import './App.css';
import Approutes from './components/Routers'


import {
  Link
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div>Landing Page</div>
      <div className="App-intro">
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/virtual">About</Link>
            </li>
          </ul>
        </nav>

        <Approutes />
      </div>
    </div>
  );
}

export default App;
