import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ReviewData = ({revie}) => {
    console.log(revie);
    const [diplayReview,setDisplayReview]=useState(revie);
    const handleDelete = () => {
      
          fetch(`https://travel-server-eta.vercel.app/myreviews/${revie._id}`, {
              method: 'DELETE'
          })
              .then(res => res.json())
              .then(data => {
                  // console.log(data)
                  if (data.deletedCount > 0) {
                      alert('User deleted successfully.');
                      const remainingUsers = diplayReview
                          .filter(usr => usr._id !== revie._id);
                      setDisplayReview(remainingUsers);
                  }
              });
  }
    return (
        <div>
            <div className="overflow-x-auto mt-10">
  <table className="table w-full">
    <thead>
      <tr>
        <th>Service Name</th>
        <th>My Review</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{revie.serviceName}</td>
        <td>{revie.text}</td>
        <td><Link to={`/update/${revie._id}`}><button className='btn btn-primary btn-sm'>Edit</button></Link><Link><button onClick={handleDelete} className='ml-4 btn btn-error btn-sm'>Delete</button></Link></td>
      </tr>
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ReviewData;