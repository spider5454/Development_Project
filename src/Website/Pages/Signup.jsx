import axios from 'axios';
import React, { useState,useEffect } from 'react'
import {Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


function Signup() {

    const redirect=useNavigate();

    useEffect(()=>{
        if(localStorage.getItem('uid'))
        {
            return redirect('/')
        }
    },[]);
    
    const [formvalue,setFormvalue]=useState({
        id: "",
        name: "",
        email: "",
        password:"",
        mobile:"",
        status:"",
        img:""
     });   
     const changeHandel=(e)=>{
        setFormvalue({...formvalue,id:new Date().getTime().toString(),status:"Unblock",[e.target.name]:e.target.value});
        console.log(formvalue);
     }
    
    function validation()
    {
        var res=true;
        if(formvalue.name=="")
        {
            toast.error("Name Field is required !");
            res=false;
            return false;
        }
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
        
        if(formvalue.mobile=="")
        {
            toast.error("Mobile Field is required !");
            res=false;
            return false;
        }
        if(formvalue.img=="")
        {
            toast.error("Add image URL Field is required !");
            res=false;
            return false;
        }
        return res;
    } 


    const submitHandel=async(e)=>{
        e.preventDefault(); 
        if(validation())
        {
            const res=await axios.post(`http://localhost:3000/user`,formvalue);
         
            setFormvalue({...formvalue,id:"",name:"",email:"",password:"",mobile:"",img:""});
            toast.success('Signup success');
            return false;
        }
    }
  return (
    <>
       <div className="container py-5">
                   
                   
                   <div className="row g-5">
                       <div className="col-lg-12 wow slideInUp" data-wow-delay="0.3s">
                           <form action=""  method="post"  onSubmit={submitHandel}>
                               <div className="row g-3">
                                   <div className="col-md-12">
                                       <input type="text" value={formvalue.name} onChange={changeHandel} name="name" className="form-control border-0 bg-light px-4" placeholder="Your Name" style={{ height: 55 }} />
                                   </div>
                                   <div className="col-md-12">
                                       <input type="email" value={formvalue.email} onChange={changeHandel} name="email" className="form-control border-0 bg-light px-4" placeholder="Your Email" style={{ height: 55 }} />
                                   </div>
                                   <div className="col-12">
                                       <input type="password" value={formvalue.password} onChange={changeHandel} name="password" className="form-control border-0 bg-light px-4" placeholder="Password" style={{ height: 55 }} />
                                   </div>
                                   <div className="col-12">
                                       <input type="number" value={formvalue.mobile} onChange={changeHandel} name="mobile" className="form-control border-0 bg-light px-4" placeholder="Mobile" style={{ height: 55 }} />
                                   </div>
                                   <div className="col-12">
                                       <input type="url" value={formvalue.img} onChange={changeHandel} name="img" className="form-control border-0 bg-light px-4" placeholder="Img URL" style={{ height: 55 }} />
                                   </div>
                                   <div className="col-12">
                                       <button className="btn btn-primary w-100 py-3" type="submit">Signup</button>
                                       <Link to="/login" className='l-txt' >If you already Registered then Login here</Link>
                                   </div>
                               </div>
                           </form>
                       </div>
                      
                   </div>
               </div>
    </>
  )
}

export default Signup
