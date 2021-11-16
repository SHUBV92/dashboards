import { useState, SyntheticEvent } from 'react';
import { LoginContainer } from './Login.styles';
import { useDispatch } from 'react-redux';
import { updateCurrentUser } from '../../store/actions';

interface LoginProps {}

const Login = () => {
  const [name, setName] = useState();
  const dispatch = useDispatch();

  const handleChange = (event: any) => {
    console.log('Handle Change', event.target.value);
    event.preventDefault();
    event.stopPropagation();
    setName(event.target.value);
  };

  const handleSubmit = (event: any) => {
    console.log('Login Name', name);
    dispatch(updateCurrentUser(name));
    event.preventDefault();
  };

  return (
    <LoginContainer>
      <h3>Sign In</h3>
      <form onSubmit={handleSubmit}>
        <input
          name='name'
          placeholder='name'
          type='text'
          onChange={handleChange}
        />
        <button>Sign In</button>
      </form>
    </LoginContainer>
  );
};

export default Login;
