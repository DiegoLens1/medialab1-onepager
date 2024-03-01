import logo from './logo.svg';
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
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="first-prototype prototype">
        test
      </div>
      <div className="second-prototype prototype">
        test
      </div>
      <div className="third-prototype prototype">
        test
      </div>
    </div>
  );
}

export default App;
