import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import Aheader1 from '../Component/Aheader1';

function Alogin() {

  const redirect=useNavigate();
    
  useEffect(()=>{
      if(localStorage.getItem('aid'))
      {
          return redirect('/adashboard')
      }
  },[]);
  
  const [formvalue,setFormvalue]=useState({
      name: "",
      email: "",
      
   });   
   const changeHandel=(e)=>{
      setFormvalue({...formvalue,[e.target.name]:e.target.value});
      console.log(formvalue);
   }
  
  function validation()
  {
      var res=true;
     
      if(formvalue.email=="")
      {
          toast.error("Email Field is required !");
          res=false;
          return false;
      }
      if(formvalue.password=="")
      {
          toast.error("Password Field is required !");
          res=false;
          return false;
      }
      
      return res;
  } 

  const submitHandel=async(e)=>{
    e.preventDefault(); // not reload page
    if(validation())
    {
        const res=await axios.get(`http://localhost:3000/admin?email=${formvalue.email}`);
        console.log(res);
        if(res.data.length>0)
        {
            if(res.data[0].password==formvalue.password)
            {
               
                    // session create
                    localStorage.setItem('aid',res.data[0].id);
                    localStorage.setItem('aname',res.data[0].name);  
                    toast.success('Login Success ');
                    redirect('/adashboard');
                    return false;     
              
            }
            else
            {
                setFormvalue({...formvalue,email:"",password:""});
                toast.error('Wrong password');
                return false;
            }
        }
        else
        {
            setFormvalue({...formvalue,email:"",password:""});
            toast.error('Email does not Exist');
            return false;
        }
       
    }
}
  
  return (
    <div>
         <Aheader1 />
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Alogin</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item active">Login</li>
            </ol>
          </nav>
        </div>
        {/* End Page Title */}
      </main>
      {/* End #main */}

      <div className="card carda " >
  <div className="card-body ">
    <h5 className="card-title"> Form</h5>
    {/* Horizontal Form */}
    <form action='' method='post' onSubmit={submitHandel} >
      <div className="row mb-3">
        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" value={formvalue.email} onChange={changeHandel} name='email' id="inputText" placeholder='Enter Name' />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Password</label>
        <div className="col-sm-10">
          <input type="text" className="form-control"  value={formvalue.password} onChange={changeHandel} name='password' id="inputEmail" placeholder='Enter Description' />
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

export default Alogin
