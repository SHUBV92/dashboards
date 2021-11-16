import { useState } from 'react';
import './App.css';

import PrivateRoutesContainer from './containers/PrivateRoutesContainer/PrivateRoutesContainer';
import NavBar from './containers/NavBar/NavBar';
import useData from './hooks/useData';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
  Navigate,
} from 'react-router-dom';
import Dashboard from './containers/Dashboard/Dashboard';
import Home from './containers/Home/Home';
import Login from './containers/Login/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [loading, data] = useData(
    'https://jsonplaceholder.typicode.com/todos/1'
  );

  console.log('loading', loading);
  console.log('data', data);

  return (
    <Router>
      <div className='App'>
        <NavBar />
        {isLoggedIn && <PrivateRoutesContainer isLoggedIn={isLoggedIn} />}
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
