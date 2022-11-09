import React from 'react';
import { Link } from 'react-router-dom';

const ReviewData = ({revie}) => {
    console.log(revie);
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
        <td><Link><button className='btn btn-primary btn-sm'>Edit</button></Link><Link><button className='ml-4 btn btn-error btn-sm'>Delete</button></Link></td>
      </tr>
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ReviewData;