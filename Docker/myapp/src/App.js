import logo from './logo.svg';
import './App.css';

function App() {  // cmd : npx create-test-app appname
                  // above cmd in vs code terminal will crete a react app.
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Sudhanshu Gupta</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
