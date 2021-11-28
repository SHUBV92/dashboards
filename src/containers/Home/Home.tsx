import { useContext } from 'react';
import { ApplicationContext } from '../../App';

const Home = () => {
  const isLoggedIn = useContext(ApplicationContext);
  return (
    <div>
      {isLoggedIn ? 'logged in' : 'not logged in'}
      {/* <h3>Professional Dashboards</h3> */}
    </div>
  );
};

export default Home;
