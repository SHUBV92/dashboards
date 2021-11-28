import React, { useState, useEffect, useReducer } from 'react';
import { useSelector } from 'react-redux';
import { LoginContainer } from './Login.styles';
import { useDispatch } from 'react-redux';
import { updateCurrentUser, updateLoggedIn } from '../../store/actions';
import history from '../../utils/history';
import { registerdUsers } from '../../data/registeredUsers';

interface LoginProps {}

const Login = () => {
  const [name, setName] = useState();
  // const [registerd, setRegistered] = useState<boolean>(false);
  // const { isLoggedIn, setIsLoggedIn } = useContext(LoggedInContext);
  const dispatch = useDispatch();
  const inputRef = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log('useEffect');
    if (inputRef.current !== null) {
      inputRef.current.focus();
    }
  }, []);

  const isRegistered = () => {
    return registerdUsers.filter((user) =>
      name === user.userName ? true : false
    );
  };

  const handleChange = (event: any) => {
    event.preventDefault();
    event.stopPropagation();
    setName(event.target.value);
  };

  const handleSubmit = (event: any) => {
    if (isRegistered().length === 0) return;

    dispatch(updateCurrentUser(name));
    event.preventDefault();

    dispatch(updateLoggedIn());

    console.log('is user registerd', isRegistered());

    return history.push('/dashboard');
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
          ref={inputRef}
        />
        <button>Sign In</button>
      </form>
    </LoginContainer>
  );
};

export default Login;
