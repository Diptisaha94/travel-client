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
          user && user.uid?<Link to='/myreview'>My Reviews</Link>:null
        } 
      </li>
      <li>
        {
          user && user.uid?<Link>Add Service</Link>:null
        }
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