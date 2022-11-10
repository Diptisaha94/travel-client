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
        <div className="navbar bg-violet-500 py-3">
  <div className="flex-1">
    <h3 className='text-3xl text-bold'>TRAVEL</h3>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0">
      <li><Link to='/home'>Home</Link></li>
      <li><Link to='/services'>Services</Link></li>
      <li><Link to='/public'>Blogs</Link></li>
      <li>
        {
          user && user.uid?<Link to='/myreview'>My Reviews</Link>:null
        } 
      </li>
      <li>
        {
          user && user.uid?<Link to='/addservice'>Add Service</Link>:null
        } 
      </li>
      <li>
      {user && user.uid?<button className='btn btn-primary text-white' onClick={handleSignOut}>Sign Out</button>:<Link to={'/login'}><button>Login</button></Link>}
      </li>
    </ul>
  </div>
</div>
    );
};

export default Header;