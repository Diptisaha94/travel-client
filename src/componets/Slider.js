import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../images/img1.jpg';
import image2 from '../images/img2.jpg';
import image3 from '../images/img3.jpg';
import '../service.css';
const Slider = () => {
    return (
        <div className="img-gradient py-12 pb-24">
           <h3 className='text-4xl text-bold pt-20'>ARE YOU READY TO TRAVEL?</h3>
           <h3 className='text-4xl text-bold pb-300'>REMEMBER US !!</h3>
           <Link to='/services'><button className="btn btn-active btn-primary my-8">All Services</button></Link>
        </div>
    );
};

export default Slider;