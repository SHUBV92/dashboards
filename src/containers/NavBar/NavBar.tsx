import { useContext } from 'react';
import { NavContainer, NavLinks, Row, Col, CurrentUser } from './NavBar.styles';
import { Link } from 'react-router-dom';
import { RootState } from '../../store/rootReducer';
import { useSelector, useDispatch } from 'react-redux';
import { updateLoggedIn } from '../../store/actions';
import { ApplicationContext } from '../../App';

const NavBar = () => {
  const currentUser = useSelector((state: RootState) => state.currentUser.name);
  const dispatch = useDispatch();
  const isLoggedIn = useContext(ApplicationContext);

  const handleClick = () => {
    return dispatch(updateLoggedIn(false));
  };

  return (
    <Row>
      <NavContainer>
        <div>
          <h3>Dashboards</h3>
        </div>
        <NavLinks>
          <Link to='/'>Home</Link>
          <Link to='/dashboard'>Dashboard</Link>
          <Link to='/login' onClick={() => handleClick()}>
            Sign out
          </Link>
        </NavLinks>
        <CurrentUser>
          <Col>
            {isLoggedIn && (
              <h5>
                Signed In as:
                {currentUser.charAt(0).toUpperCase() + currentUser.slice(1)}
              </h5>
            )}
          </Col>
        </CurrentUser>
      </NavContainer>
    </Row>
  );
};

export default NavBar;
