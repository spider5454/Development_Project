import React, { useEffect, useState } from 'react'
import Aheader from '../Component/Aheader'
import axios from 'axios';
import { toast } from 'react-toastify';

function Add_Games() {

  const[data, setData]= useState([]);

  useEffect(() => {
    fetch();
 }, []);

 const fetch = async ()=>{
  const res = await axios.get (`http://localhost:3000/games`);
  setData(res.data)
}


const [formvalue, setFormvalue] = useState ({

  id: '',
  name: '',
  desc: '',
  image: '',
  price: ''


});

const changeHandel = (e) =>{
  setFormvalue ({...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value});
 
}

function validation() {
  var res = true
  if(formvalue.name === ""){
    toast.error('Name is required');
    res = false;
    return false;
  }
  
  if(formvalue.desc === ""){
    toast.error('Description is required');
    res = false;
    return false
  }
  if(formvalue.image === ""){
    toast.error('Image is required');
    res = false;
    return false
  }
  
  if (formvalue.price === ""){
    toast.error ('Price is required');
    res= false;
    return false;
  }
  return res
    
  }



const submitHandel = async (e)=>{
  e.preventDefault();

  if (validation()){

  const res = await axios.post(`http://localhost:3000/games`, formvalue);
    setFormvalue({...formvalue, id:"", name:"", desc:"", image:"", price:"" } )
  toast.success('Data insert success');
  return false;
  }
}



  return (
    <div>
        <Aheader/>

        <main id="main" className="main">
  <div className="pagetitle">
    <h1>Add Games</h1>
    <nav>
      <ol className="breadcrumb">
        
        <li className="breadcrumb-item active"> Games</li>
      </ol>
    </nav>
  </div>{/* End Page Title */}
 
</main>{/* End #main */}


<div className="card carda  " >
  <div className="card-body ">
    <h5 className="card-title"> Form</h5>
    {/* Horizontal Form */}
    <form action='' method='post' onSubmit={submitHandel} >
      <div className="row mb-3">
        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Game Name</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" value={formvalue.name} onChange={changeHandel} name='name' id="inputText" placeholder='Enter Name' />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">description</label>
        <div className="col-sm-10">
          <input type="text" className="form-control"  value={formvalue.desc} onChange={changeHandel} name='desc' id="inputEmail" placeholder='Enter  Description' />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Image</label>
        <div className="col-sm-10">
        <input type='url' className="form-control"  value={formvalue.image} onChange={changeHandel} name='image' id="inputtext" placeholder='Enter Image URL' />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Price</label>
        <div className="col-sm-10">
          <input type="text" className="form-control"  value={formvalue.price} onChange={changeHandel} name='price' id="inputtext" placeholder='Enter price' />
        </div>
      </div>
    
      
      <div className="text-center">
        <button type="submit" className="btn btn-primary">Submit</button>
      
      </div>
    </form>{/* End Horizontal Form */}
  </div>
</div>

      
    </div>
  )
}

export default Add_Games
