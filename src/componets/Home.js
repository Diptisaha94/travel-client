import React from 'react';
import Slider from './Slider';
import Services from './Services';
import { Link, useLoaderData } from 'react-router-dom';
import Service from './Service';

const Home = () => {
    const serviceData=useLoaderData();
    console.log(serviceData);
    return (
        <div>
            <Slider></Slider>
      <div className="grid gap-4 grid-cols-3 ml-4 mt-16">
        {
            serviceData.map(service=><Service key={service._id} service={service}></Service>)
        }
      </div>
      <Link to='/services'><button className="btn btn-active btn-primary">Button</button></Link>
        </div>
    );
};

export default Home;