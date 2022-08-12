import React, { useState } from 'react';

function Navbar() {
    const [navMenu, setNavMenu] = useState(
        [
          ["Home", "/home"],
          ["Dashboard", "/dashboard"]
        ]
    );
    
    const [logInStatus, setLogInStatus] = useState(false);
    
    return(
        <div className="container mx-auto px-4">
          <ul className="flex py-4">
            {
              navMenu.map(([title, url]) => (
                <li><a href={url} className='btn'>{title}</a></li>
              ))
            }
            
            <li>
            {
              logInStatus
                ? <a className="btn">Sign Out</a>
                : <a className="btn">Sign In</a>
            }
            </li>
          </ul>
          <h1 className="text-xl font-semibold">Personal Blog</h1>
        </div>
    );
}

export default Navbar;