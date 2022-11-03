import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Content from './components/navigation/Content';
import Menu from './components/navigation/Menu';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Router>
        <Menu />
        <Content />
      </Router>
    </div>
  )
}

export default App
