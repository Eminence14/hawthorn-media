import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import NotFound from './components/NotFound';
import Dashboard from './components/Dashboard';
import Bookings from './components/Bookings';
import Services from './components/Services';
import Profile from './components/Profile';


function App() {
  return (
    <div className='App'>
      {/* <a href="javascript:window.open('http://localhost:3000/', '', 'width: 375px , height: auto')">
        window
      </a> */}


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/booking' element={<Bookings />} />
        <Route path='/service' element={<Services />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
