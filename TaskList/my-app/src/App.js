import './App.css';
import Menu from './Components/Menu';
import Rotas from './Components/Rotas';
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Menu />
      <Rotas />
    </Router>
  )
}

export default App;

