
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import ThankYou from './components/ThankYou';
import CountDownTimer from './components/CountDownTimer';
import Audi from './components/Audi';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div className="">
       <Router> 
        <Routes>
          <Route path='/thank-you' element={<ThankYou/>}/>
          <Route path='/audi' element={<Audi/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/event' element={<CountDownTimer/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
