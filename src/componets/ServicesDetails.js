import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../context/Authcontext';
import '../service.css';
import Review from './review';

const ServicesDetails = () => {
    const [text,setText]=useState('');
    const [reviewItem,setReviewItem]=useState([]);
    //const [reviewAll,setReviewAll]=useState()
    const {user}=useContext(AuthContext);
    const detailData = useLoaderData();
    const {name,description,img,price,_id}=detailData;
    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
  .then(response => response.json())
  .then(data => setReviewItem(data))
     },[]);
     console.log(reviewItem);
    const handleText=(e)=>{
        setText(e.target.value);
    }
    const handleToText=(e)=>{
        e.preventDefault();
        // const reviewText=text;
        // console.log(reviewText);
        const reviewInfo ={
            serviceName:name,
            text:text,
            serviceId:_id,
            email:user.email,
            name:user.displayName,
            photoURL:user.photoURL
        }
        fetch('http://localhost:5000/services/:id', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reviewInfo),
    })
      .then((response) => response.json())
      .then((data) => {
        const newReview = [...reviewItem, data];
        setReviewItem(newReview);
        //console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }

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
    <div className="">
        {/* <div className="flex items-center">
            <img className='image-size' src={user?.photoURL} alt=''></img>
            <h3>{user?.displayName}</h3>
        </div> */}
        {
            reviewItem.map(rev=><Review key={rev._id} rev={rev}></Review>)
        }
    </div>
    {
        user && user.uid?<><textarea onChange={handleText} name='text' className='w-80 mt-12 p-3 border-2 border-indigo-600' placeholder='add your review'></textarea><br/>
        <button onClick={handleToText} type='submit' className='btn btn-primary text-center'>Add Review</button></>:<h3 className='mt-10 text-2xl'>Please <Link className='text-cyan-600' to='/login'>login</Link> to add a review</h3>
    }
</div>
        </div>
    );
};

export default ServicesDetails;