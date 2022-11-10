import React from 'react';
import { toast } from 'react-toastify';

const AddService = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const service = {
          name: e.target.name.value,
          price: parseInt(e.target.price.value),
          img: e.target.image.value,
          description:e.target.descrip.value
        };
    e.target.reset();
        fetch("https://travel-server-eta.vercel.app/services", {
          method: "POST",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(service)
        }).then(res => res.json())
        .then(data => {
            toast.success("product add successfully")
        })
        .catch(err => {
          console.log(err);;
        })
        
      };
    return (
        <div className='w-2/4 mx-auto mt-14'>
            <h3 className='text-3xl mb-6 font-bold'>Add Service</h3>
            <form onSubmit={handleSubmit}>
            <div>
            <label className='text-2xl'>
   Service Name:
    <input className='border border-slate-500 p-2 ml-3' type="text" name="name" required/>
  </label>
</div>
<div>
            <label className='text-2xl'>
    Image:
    <input className='border border-slate-500 p-2 ml-3 mt-4' type="url" name="image" required/>
  </label>
</div>
<div>
            <label className='text-2xl'>
    Price:
    <input className='border border-slate-500 p-2 ml-3 mt-4' type="text" name="price" required/>
  </label>
</div>
<div>
  <label className='text-2xl'>Description:</label>
  <textarea className='border border-slate-500 p-3 w-80 ml-3 mt-7' name="descrip"></textarea>
</div>
<button className="btn btn-primary mt-6 ml-10">Add Service</button>
            </form>
        </div>
    );
};

export default AddService;