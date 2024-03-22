import React from 'react';
import Card from './UI/Card';
import './Login.css';

export default function Login(props) {
  function handleSubmit(event) {
    event.preventDefault();
    props.onLogin();
  }

  return (
    <Card className="login-form">
      <form onSubmit={handleSubmit}>
        <div className="username-control">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" placeholder="example@email.com" />
        </div>
        <div className="password-control">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="******" />
        </div>
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </Card>
  );
}
