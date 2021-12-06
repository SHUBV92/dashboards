import { createContext } from 'react';
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
import AccordionContent from './containers/AccordionContent/AccordionContent';
import { useSelector } from 'react-redux';
import { RootState } from './store/rootReducer';
import store from './store/store';

export const ApplicationContext = createContext(false);

function App() {
  store.subscribe(() => {
    const { loggedIn } = store.getState();

    localStorage.setItem('isloggedIn', `${loggedIn}`);
  });

  const isLoggedIn = useSelector((state: RootState) => state.loggedIn.loggedIn);

  const currentUser = useSelector((state: RootState) => state.currentUser);

  // const isLoggedIn = localStorage.getItem('isLoggedIn');

  return (
    <ApplicationContext.Provider value={isLoggedIn}>
      <Router>
        <div className='App'>
          <NavBar />
          <div className='body'>
            {isLoggedIn && <PrivateRoutesContainer isLoggedIn={isLoggedIn} />}
            <Routes>
              <Route path='/login' element={<Login />} />
              <Route path='/' element={<Home />} />
            </Routes>

            {isLoggedIn && (
              <Routes>
                <Route path='/dashboard' element={<Dashboard />} />
                <Route
                  path='/accordion/:path_variable'
                  element={<AccordionContent />}
                />
              </Routes>
            )}
          </div>
          <div className='footer'>
            <Footer />
          </div>
        </div>
      </Router>
    </ApplicationContext.Provider>
  );
}

export default App;
