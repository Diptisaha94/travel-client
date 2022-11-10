import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services,setServices]=useState([]);
     useEffect(()=>{
        fetch('https://travel-server-eta.vercel.app/services')
  .then(response => response.json())
  .then(data => setServices(data))
     },[])
     console.log(services);
    return (
        <div className='grid gap-4 grid-cols-3 ml-4'>
        {
            services.map(service=><Service key={service._id} service={service}></Service>)
        }
        </div>
    );
};

export default Services;