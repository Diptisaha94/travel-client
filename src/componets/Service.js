import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {name,description,img,price,_id}=service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={img} alt="img" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    {
        description.length>100?<p>{description.slice(0,100)+'...'}</p>:<p>{description}</p>
    }
    <hr/>
    <div className="card-actions flex justify-between">
        <div className="">
            <h2>STARTS FROM</h2>
            <p>${price}</p>
        </div>
      <Link to={`/services/${_id}`}><button className="btn btn-primary">View Details</button></Link>
    </div>
  </div>
</div>
    );
};

export default Service;