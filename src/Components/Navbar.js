import React, { useContext } from 'react';
//Using CSS Modules: The CSS inside a module is available only for the component that imported it,
//and you do not have to worry about name conflicts.
import style from './Navbar.module.css';
import NavbarLinks from './NavbarLinks';
import AuthContext from '../Context/AuthContext';

export default function Navbar() {
  //Using useContext instade of Context.Consumer
  const ctx = useContext(AuthContext);

  return (
    <nav className={style.navbar}>
      <div className={style['navbar-logo']}>
        <span>Sample Login Page</span>
      </div>
      {ctx.loggedIn && <NavbarLinks />}
    </nav>
  );

  //   // Using Context.Consumer instade of useContext hook
  // return (
  //   <AuthContext.Consumer>
  //     {(ctx) => {
  //       console.log(ctx);
  //       return (
  //         <nav className={style.navbar}>
  //           <div className={style['navbar-logo']}>
  //             <span>Sample Login Page</span>
  //           </div>
  //           {ctx.loggedIn && <NavbarLinks onLogout={props.onLogout} />}
  //         </nav>
  //       );
  //     }}
  //   </AuthContext.Consumer>
  // );
}
