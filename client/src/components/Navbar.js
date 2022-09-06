import React, { useState } from 'react';
import Auth from '../utils/auth';

function Navbar() {
  return(
    <div className="navbar">
      <div className="flex-1">
        <h1 className="text-xl px-4">Personal Blog</h1>
      </div>
      <div className='flex-none'>

      </div>
      <ul className="menu menu-horizontal px-4">
        <li><a href="/" className='btn btn-outline'>Home</a></li>
        {
          Auth.loggedIn()
          ? 
          <>
            <li>
              <a href="/dashboard" className='btn btn-outline mx-4'>Dashboard</a>
            </li>
            <li>
              <a onClick={Auth.logout} href="/" className="btn btn-outline">Sign Out</a>
            </li>
          </>
          :
          <>
            <li>
              <a href="/signin" className='btn btn-outline mx-4'>Sign In</a>
            </li>
            <li>
              <a href="/signup" className='btn btn-outline'>Sign Up</a>
            </li>
          </>
        }
      </ul>
    </div>
  );
}

export default Navbar;