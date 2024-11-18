import logo from 'Frontend\demo\src\Assets\logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org" //// I NEED TO npm build then drop the built version into Netifly
          target="_blank"
          rel="noopener noreferrer"
        >
          Sustainability App
        </a>
      </header>
    </div>
  );
}

export default App;
