import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/Authcontext';

const Header = () => {
  const{user,logOut}=useContext(AuthContext);
  const handleSignOut=()=>{
    logOut()
    .then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });

  }
    return (
        <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0">
      <li>
        {
          user && user.uid?<Link>My Reviews</Link>:null
        }
      </li>
      <li>
        {
          user && user.uid?<Link>Add Service</Link>:null
        }
      </li>
      <li tabIndex={0}>
        <a>
          Parent
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2 bg-base-100">
          <li><a>Submenu 1</a></li>
          <li><a>Submenu 2</a></li>
        </ul>
      </li>
      <li>
      {user && user.uid?<button onClick={handleSignOut}>Sign Out</button>:<Link to={'/login'}><button>Login</button></Link>}
      </li>
    </ul>
  </div>
</div>
    );
};

export default Header;