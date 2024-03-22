import React from 'react';
//Using CSS Modules: The CSS inside a module is available only for the component that imported it,
//and you do not have to worry about name conflicts.
import style from './Navbar.module.css';

export default function Navbar(props) {
  function handleClick() {
    props.onLogout();
  }

  return (
    <nav className={style.navbar}>
      <div className={style['navbar-logo']}>
        <span>Sample Login Page</span>
      </div>
      {props.showLinks && (
        <div className={style['navbar-links']}>
          <li>
            <button type="sumbit">Home</button>
          </li>
          <li>
            <button type="sumbit">About</button>
          </li>
          <li>
            <button type="sumbit">Contact</button>
          </li>
          <li>
            <button type="sumbit" onClick={handleClick}>
              Logout
            </button>
          </li>
        </div>
      )}
    </nav>
  );
}
