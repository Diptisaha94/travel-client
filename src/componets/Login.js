import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/Authcontext';

const Login = () => {
const{login,signInWithGoogle}=useContext(AuthContext);
  const handleToLogin=(e)=>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    form.reset();
    login(email,password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
  }
  const handleGoogleSignin = () => {
    signInWithGoogle().then(result => {
      console.log(result.user)
      //navigate(from, { replace: true })
    })
  }
    return (
        <div className="hero min-h-screen bg-base-200 pt-10">
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="">
        <h1 className="text-4xl font-bold text-center pt-4">Please Login!</h1>
        </div>
      <form onSubmit={handleToLogin}>
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" name="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" />
          <label className="label">
            <p className="label-text">You have no account please <Link className='text-primary underline' to='/signup'>Signup</Link></p>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
      </form>
      <button onClick={handleGoogleSignin} className="btn mx-4 btn-outline btn-primary mb-6">Login Google</button>
    </div>
  </div>
    );
};

export default Login;