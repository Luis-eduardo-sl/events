import logo from './logo.svg';
import './App.css';
import Texto from './components/Texto';
import Botao from './components/Botao.js';
import Form from './components/Form.js';

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
        <Texto/>
        <Botao num="2"/>
        <Botao num= "3"/>
        <Form/>
      </header>
    </div>
  );
}

export default App;
