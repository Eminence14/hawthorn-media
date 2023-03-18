import './App.css';
import './Tablet.css'
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
import Videography from './components/Videography';
import Photography from './components/Photography';
import Studio from './components/Studio';
import Corporate from './components/Corporate';


function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/booking' element={<Bookings />} />
        <Route path='/services'>
          <Route index element={<Services />} />
          <Route path='videography' element={<Videography />} />
          <Route path='photography' element={<Photography />} />
          <Route path='studio' element={<Studio />} />
          <Route path='corporate' element={<Corporate />} />
        </Route>
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
