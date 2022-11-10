import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const userReivewInfo=useLoaderData();
    const [userReview,setUserReview]=useState(userReivewInfo);
    const handleInputChange = event =>{
        setUserReview(event.target.value);
    }
    //travel-server-eta.vercel.app/update
    const handleUpdateReview=()=>{
        console.log(userReview);
        fetch(`https://travel-server-eta.vercel.app/update/${userReivewInfo._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userReview)
        })
        .then(res => res.json())
        .then(data => {
                console.log(data);
            
        })
    }
    return (
        <div>
            <h2>Please Update: {userReivewInfo.serviceName}</h2>
                <textarea className='w-80 mt-12 p-3 border-2 border-indigo-600' onChange={handleInputChange} type="text" name='name' placeholder='name' required></textarea><br/>
                <button onClick={handleUpdateReview} className='btn btn-primary' type="submit">Update User</button>
        </div>
    );
};

export default Update;