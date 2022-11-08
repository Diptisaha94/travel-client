import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/Authcontext';

const Signup = () => {
  const {createUser,updateUser}=useContext(AuthContext);
  const handleCreateUser=(e)=>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    form.reset();
    createUser(email,password)
    .then((userCredential) => {
      // Signed in 
      updateUser(name,photo);
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
  }
    return (
        <div className="hero min-h-screen bg-base-200">
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="">
        <h1 className="text-4xl font-bold text-center pt-4">Please SignUp!</h1>
        </div>
      <div className="card-body">
      <form onSubmit={handleCreateUser}>
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="name" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">photo url</span>
          </label>
          <input type="url" name="photo" placeholder="photo" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
          <label className="label">
            <p className="label-text">Already you have an account please <Link className='text-primary underline' to='/login'>login</Link></p>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </form>
      </div>
    </div>
  </div>
    );
};

export default Signup;