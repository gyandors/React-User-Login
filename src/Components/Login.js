import React, { useState, useEffect, useReducer, useContext } from 'react';
import Card from './UI/Card';
import Input from './UI/Input';
import './Login.css';
import AuthContext from '../Context/AuthContext';

function usernameReducer(state, action) {
  switch (action.type) {
    case 'USER_NAME':
      return { value: action.value, isValid: action.value.includes('@') };

    case 'USER_NAME_BLUR':
      return { value: state.value, isValid: state.value.includes('@') };

    default:
      return { value: '', isValid: false };
  }
}

function passwordReducer(state, action) {
  switch (action.type) {
    case 'PASSWORD':
      return { value: action.value, isValid: action.value.trim().length > 6 };

    case 'PASSWORD_BLUR':
      return { value: state.value, isValid: state.value.trim().length > 6 };

    default:
      return { value: '', isValid: false };
  }
}

export default function Login(props) {
  const ctx = useContext(AuthContext);

  const [usernameState, usernameDispatch] = useReducer(usernameReducer, {
    value: '',
    isValid: null,
  });

  const [passwordState, passwordDispatch] = useReducer(passwordReducer, {
    value: '',
    isValid: null,
  });

  // const [enteredUsername, setEnteredUsername] = useState('');
  // const [usernameIsValid, setUsernameIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [valid, setValid] = useState();

  // useEffect(() => {
  //   const clearTime = setTimeout(() => {
  //     console.log('Effect start');
  //     setValid(
  //       enteredUsername.includes('@') && enteredPassword.trim().length > 6
  //     );
  //   }, 1000);

  //   return () => {
  //     console.log('CleanUp');
  //     clearTimeout(clearTime);
  //   };
  // }, [enteredUsername, enteredPassword]);

  function handleUsernameChange(event) {
    usernameDispatch({ type: 'USER_NAME', value: event.target.value });
    setValid(event.target.value.includes('@') && passwordState.isValid);
  }

  function handlePasswordChange(event) {
    passwordDispatch({ type: 'PASSWORD', value: event.target.value });
    setValid(usernameState.isValid && event.target.value.trim().length > 6);
  }

  function handleUsernameBlur() {
    usernameDispatch({ type: 'USER_NAME_BLUR' });
  }

  function handlePasswordBlur() {
    passwordDispatch({ type: 'PASSWORD_BLUR' });
  }

  function handleSubmit(event) {
    event.preventDefault();

    ctx.onLogin(usernameState.value, passwordState.value);
  }

  return (
    <Card className="login-form">
      <form onSubmit={handleSubmit}>
        <div
          className={`input-control ${
            usernameState.isValid === false ? 'invalid' : ''
          }`}
        >
          <label htmlFor="username">Username</label>
          <Input
            type="text"
            id="username"
            placeholder="example@email.com"
            value={usernameState.value}
            onChange={handleUsernameChange}
            onBlur={handleUsernameBlur}
          />
        </div>
        <div
          className={`input-control ${
            passwordState.isValid === false ? 'invalid' : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <Input
            type="password"
            id="password"
            placeholder="******"
            value={passwordState.value}
            onChange={handlePasswordChange}
            onBlur={handlePasswordBlur}
          />
        </div>
        <button className="login-btn" type="submit" disabled={!valid}>
          Login
        </button>
      </form>
    </Card>
  );
}
