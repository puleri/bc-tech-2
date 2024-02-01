import logo from './logo.svg';
import './App.css';
import Write from './components/Write';
import Login from './components/Login';
import ReadRealTime from './components/ReadRealTime';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Write />
        <Login />
        <ReadRealTime />
      </header>
    </div>
  );
}

export default App;
