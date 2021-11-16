import { NavContainer, NavLinks } from './NavBar.styles';
import { Link } from 'react-router-dom';
import { RootState } from '../../store/rootReducer';
import { useSelector } from 'react-redux';

const NavBar = () => {
  const currentUser = useSelector((state: RootState) => state.currentUser.name);

  console.log('Current User from navbar', currentUser);

  return (
    <NavContainer>
      <div>
        <h3>Dashboards</h3>
      </div>
      <NavLinks>
        <Link to='/'>Home</Link>
        <Link to='/dashboard'>Dashboard</Link>
        <Link to='/login'>Sign out</Link>
      </NavLinks>
      <div>Signed In as: {currentUser} </div>
    </NavContainer>
  );
};

export default NavBar;
