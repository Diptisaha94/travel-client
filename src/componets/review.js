import React from 'react';

const Review = ({rev}) => {
console.log(rev);
    return (
        <div className="mt-10">
            <div className="flex items-center">
            <img className='image-size' src={rev.photoURL} alt=''></img>
            <h3>{rev.name}</h3>
        </div>
        <h4>{rev.text}</h4>
        </div>
    );
};

export default Review;