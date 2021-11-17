import { NavContainer, NavLinks, Row, Col, CurrentUser } from './NavBar.styles';
import { Link } from 'react-router-dom';
import { RootState } from '../../store/rootReducer';
import { useSelector } from 'react-redux';

const NavBar = () => {
  const currentUser = useSelector((state: RootState) => state.currentUser.name);

  console.log('Current User from navbar', currentUser);

  return (
    <Row>
      <NavContainer>
        <div>
          <h3>Dashboards</h3>
        </div>
        <NavLinks>
          <Link to='/'>Home</Link>
          <Link to='/dashboard'>Dashboard</Link>
          <Link to='/login'>Sign out</Link>
        </NavLinks>
        <CurrentUser>
          <Col>
            Signed In as:{' '}
            {currentUser.charAt(0).toUpperCase() + currentUser.slice(1)}
          </Col>
        </CurrentUser>
      </NavContainer>
    </Row>
  );
};

export default NavBar;
