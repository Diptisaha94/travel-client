import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServicesDetails = () => {
    const detailData = useLoaderData();
    const {name,description,img,price}=detailData;
    return (
        <div className="card w-2/3 bg-base-100 shadow-xl mx-auto">
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
    );
};

export default ServicesDetails;