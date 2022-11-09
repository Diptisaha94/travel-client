import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../context/Authcontext';

const ServicesDetails = () => {
    const {user}=useContext(AuthContext);
    const detailData = useLoaderData();
    const {name,description,img,price}=detailData;
    return (
        <div className="w-2/3 mx-auto">
            <div className="card bg-base-100 shadow-xl">
  <figure><img src={img} alt="img" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
    <hr/>
    <div className="card-actions flex justify-between">
        <div className="">
            <h2>STARTS FROM</h2>
            <p>${price}</p>
        </div>
    </div>
  </div>
</div>
<div className="">
<h3>
    {
        user && user.uid?<><textarea className='w-80 mt-12 p-3 border-2 border-indigo-600' placeholder='add your review'></textarea><br/>
        <button className='btn btn-primary text-center'>Add Review</button></>:<h3 className='mt-10 text-2xl'>Please <Link className='text-cyan-600' to='/login'>login</Link> to add a review</h3>
    }
</h3>
</div>
        </div>
    );
};

export default ServicesDetails;