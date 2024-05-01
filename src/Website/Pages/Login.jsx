import React, { useEffect, useState } from 'react'

import Header from '../Component/Header'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

function Login() {

    const redirect=useNavigate();
    
    useEffect(()=>{
        if(localStorage.getItem('uid'))
        {
            return redirect('/')
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
            const res=await axios.get(`http://localhost:3000/user?email=${formvalue.email}`);
   
            if(res.data.length>0)
            {
                if(res.data[0].password==formvalue.password)
                {
                    if(res.data[0].status=="Unblock")
                    {
                        // session create
                        localStorage.setItem('uid',res.data[0].id);
                        localStorage.setItem('uname',res.data[0].name);
                        
                        redirect('/');
                        toast.success('Login Success ');
                        return false;     
                    }
                    else
                    {
                        setFormvalue({...formvalue,email:"",password:""});
                        toast.error('Accout Blocked ');
                        return false;
                    }  
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
    <>
      <Header/>
       
      <div className="container py-5 l-p">
                   
                   
                   <div className="row g-5">
                       <div className="col-lg-12 wow slideInUp" data-wow-delay="0.3s">
                           <form action=""  method="post"  onSubmit={submitHandel}>
                               <div className="row g-3">
                                 
                                   <div className="col-md-12">
                                       <input type="email" value={formvalue.email} onChange={changeHandel} name="email" className="form-control border-0 bg-light px-4" placeholder="Your Email" style={{ height: 55 }} />
                                   </div>
                                   <div className="col-12">
                                       <input type="password" value={formvalue.password} onChange={changeHandel} name="password" className="form-control border-0 bg-light px-4" placeholder="Password" style={{ height: 55 }} />
                                   </div>
                                 
                                   <div className="col-12">
                                       <button className="btn btn-primary w-100 py-3" type="submit">Login</button>
                                       <Link to="/signup" className='l-txt'>If you not Registered then Signup here</Link>
                                   </div>
                               </div>
                           </form>
                       </div>
                      
                   </div>
               </div>

    </>
  )
}

export default Login
