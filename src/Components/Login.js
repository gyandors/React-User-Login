import React, { useState, useRef } from 'react';
import Card from './UI/Card';
import ErrorModal from './UI/ErrorModal';
import './Login.css';

export default function Login(props) {
  const [valid, setValid] = useState();

  const username = useRef('');
  const password = useRef('');
  const college = useRef('');
  const loginButton = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    console.log(loginButton);
    const enteredUsername = username.current.value;
    const enteredPassword = password.current.value;
    const enteredCollege = college.current.value;
    if (
      enteredUsername.trim().length === 0 ||
      enteredPassword.trim().length === 0 ||
      enteredCollege.trim().length === 0
    ) {
      setValid({
        title: 'Invalid input',
        message: 'Please enter username and password',
      });
      return;
    } else if (!enteredUsername.includes('@')) {
      setValid({
        title: 'Invalid username',
        message: 'Username must be Email',
      });
      return;
    } else if (enteredPassword.trim().length < 6) {
      setValid({
        title: 'Invalid password',
        message: 'Length of password should be minimum 6',
      });
      return;
    } else props.onLogin(enteredUsername, enteredPassword);
  }

  function handleValid() {
    setValid();
  }

  return (
    <>
      {valid && (
        <ErrorModal
          title={valid.title}
          message={valid.message}
          onValid={handleValid}
        />
      )}
      <Card className="login-form">
        <form onSubmit={handleSubmit}>
          <div className="username-control">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="example@email.com"
              ref={username}
            />
          </div>
          <div className="password-control">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="******"
              ref={password}
            />
          </div>
          <div className="college-control">
            <label htmlFor="college">College</label>
            <input
              type="text"
              id="college"
              placeholder="Collage name"
              ref={college}
            />
          </div>
          <button className="login-btn" type="submit" ref={loginButton}>
            Login
          </button>
        </form>
      </Card>
    </>
  );
}
