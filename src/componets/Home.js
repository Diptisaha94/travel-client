import React from 'react';
import Slider from './Slider';
import Services from './Services';
import { Link, useLoaderData } from 'react-router-dom';
import Service from './Service';
import img5 from '../images/img2.jpg';
import img6 from '../images/img1.jpg';
import img7 from '../images/img3.jpg';

const Home = () => {
    const serviceData=useLoaderData();
    console.log(serviceData);
    return (
        <div>
            <Slider></Slider>
            <div className="text-center">
                <h3 className='font-bold text-4xl mt-12'>OUR SERVICES</h3>
            </div>
      <div className="grid gap-4 grid-cols-3 ml-4 mt-16">
        {
            serviceData.map(service=><Service key={service._id} service={service}></Service>)
        }
      </div>
      <div className="w-2/3 mx-auto text-center mt-10">
      <Link to='/services'><button className="btn btn-active btn-primary mb-10">See All</button></Link>
      </div>
      <div className="grid grid-cols-2">
        <div className="">
            <img src={img6} alt=''></img>
        </div>
        <div className="px-8 mb-12">
            <h3 className='font-bold text-4xl mt-12 mb-10'>WE WORK FOR YOU</h3>
            <p className='font-bold text-3xl mt-2'>We will take you everywhere safely</p>
            <p className='text-xl mt-5'>Looking for inspiration for a fall getaway? Look no further. We curated a list of the top cities  to visit between September and November. Whether you’d rather soak hot springs or dig into sticky cinnamon rolls in Montreal, head to any of these nine destinations for the ultimate fall city break.</p>
            <p></p>
        </div>
      </div>
      <div className="">
      <h3 className='font-bold text-4xl mt-12 mb-10 text-center'>OUR GALLARY</h3>
            <div className="grid grid-cols-3 gap-4">
            <img src={img7} alt=''></img>
            <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt=''></img>
            <img src='https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt=''></img>
            <img src='https://upload.wikimedia.org/wikipedia/commons/9/96/Tanguar_Haor_o_jadukata_nodi.jpg' alt=''></img>
            <img src='https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODB8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt=''></img>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Rangamati_lake-kaptai.jpg/1280px-Rangamati_lake-kaptai.jpg' alt=''></img>
            </div>
        </div>
        </div>
    );
};

export default Home;