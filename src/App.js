import logo from './logo.svg';
import './App.css';
import IncreaseDecrease from './IncreaseDecrease.jsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <IncreaseDecrease num = {3} />
      </header>
    </div>
  );
}

export default App;
