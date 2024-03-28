import React from 'react';
import style from './Navbar.module.css';

export default function NavbarLinks(props) {
  function handleClick() {
    props.onLogout();
  }

  return (
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
  );
}
