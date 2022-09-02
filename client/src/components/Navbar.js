import React, { useState } from 'react';
import Auth from '../utils/auth';

function Navbar() {
    const [logInStatus, setLogInStatus] = useState(false);
    
    return(
        <div className="container mx-auto px-4">
          <ul className="flex py-4">
            <li><a href="/" className='btn'>Home</a></li>
            {
              Auth.loggedIn()
              ? 
              <>
                <li>
                  <a href="/dashboard" className='btn m-4'>Dashboard</a>
                </li>
                <li>
                  <a onClick={Auth.logout} href="/" className="btn">Sign Out</a>
                </li>
              </>
              :
              <>
                <li>
                  <a href="/signin" className='btn m-4'>Sign In</a>
                </li>
                <li>
                  <a href="/signup" className='btn'>Sign Up</a>
                </li>
              </>
            }
          </ul>
          <h1 className="text-xl font-semibold">Personal Blog</h1>
        </div>
    );
}

export default Navbar;