import { BrowserRouter as Router , Routes ,Route } from 'react-router-dom';
import Header from './components/header/Header'
import Home from './components/home/Home'
import Card from './components/card/Card'
import './App.css';
import "./styles.css";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
         <Route path='/' exact Component={Home}/>
         <Route path='/card' exact Component={Card}/>
      </Routes>
    </Router>
    
  );
}

export default App;
