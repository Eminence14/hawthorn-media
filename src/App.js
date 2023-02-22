import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className='App'>
      {/* <a href="javascript:window.open('http://localhost:3000/', '', 'width: 375px , height: auto')">
        window
      </a> */}

      <Navbar />

      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<NotFound />} />

      </Routes> */}
    </div>
  );
}

export default App;
