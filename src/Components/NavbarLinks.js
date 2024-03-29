import React, { useContext } from 'react';
import style from './Navbar.module.css';
import AuthContext from '../Context/AuthContext';

export default function NavbarLinks(props) {
  const ctx = useContext(AuthContext);

  function handleClick() {
    ctx.onLogout();
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
