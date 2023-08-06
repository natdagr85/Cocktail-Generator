import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Liquor from './components/liquor';
import Home from './components/home';
import Help from './components/help';
import Generator from './components/generator';
import Random from './components/random';


function App() {
  return (
      <div className='App'>
        <Router>
          <div>
          <NavBar />         
          <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route exact path='/liquor' element={<Liquor />}/>
            <Route exact path='/help' element={<Help />}/>
            <Route exact path='/generator' element={<Generator />}/>
            <Route exact path='/random' element={<Random/>} />
          </Routes>
          </div>
        </Router>
      </div>
  );
}

export default App;
