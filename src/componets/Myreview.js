import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/Authcontext';
import ReviewData from './ReviewData';

const Myreview = () => {
    const [myreviews,setMyreviews]=useState([]);
    const {user}=useContext(AuthContext);
    useEffect(()=>{
        fetch(`https://travel-server-eta.vercel.app/myreviews?email=${user?.email}`)
  .then(response => response.json())
  .then(data => setMyreviews(data))
    },[user?.email])
    return (
    <div className="">
        {
            myreviews.map((revie)=><ReviewData key={revie._id} revie={revie}></ReviewData>)
        }
    </div>
    );
};

export default Myreview;