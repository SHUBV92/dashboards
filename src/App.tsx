import { useState } from 'react';
import './App.css';

import PrivateRoutesContainer from './containers/PrivateRoutesContainer/PrivateRoutesContainer';
import NavBar from './containers/NavBar/NavBar';
import useData from './hooks/useData';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './containers/Dashboard/Dashboard';
import Home from './containers/Home/Home';
import Login from './containers/Login/Login';
import Footer from './containers/Footer/Footer';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, data] = useData(
    'https://jsonplaceholder.typicode.com/todos/1'
  );

  return (
    <Router>
      <div className='App'>
        <NavBar />
        <div className='body'>
          {isLoggedIn && <PrivateRoutesContainer isLoggedIn={isLoggedIn} />}
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
        <div className='footer'>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
