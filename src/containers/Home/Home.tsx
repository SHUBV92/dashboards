import { useContext } from 'react';
import { ApplicationContext } from '../../App';
import AgGrid from '../../components/AgGrid/AgGrid';

const Home = () => {
  const isLoggedIn = useContext(ApplicationContext);
  return (
    <div>
      {isLoggedIn ? (
        <>
          <h1> logged in</h1>
          <AgGrid />
        </>
      ) : (
        <div>
          <h2>Sign In</h2>
          <p>To start using our amazing Dashboards</p>
        </div>
      )}
    </div>
  );
};

export default Home;
