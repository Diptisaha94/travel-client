import React from 'react';

const Service = ({service}) => {
    const {name,description,img,price}=service;
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
      <button className="btn btn-primary">View Details</button>
    </div>
  </div>
</div>
    );
};

export default Service;