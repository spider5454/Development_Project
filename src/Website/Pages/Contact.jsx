import React, { useState } from 'react'
import Header from '../Component/Header'
import { Helmet } from 'react-helmet'
import axios from 'axios'
import { toast } from 'react-toastify'
import Footer from '../Component/Footer'


function Contact() {


      const[formvalue,setFormvelue]= useState ({

          id: "",
          name:"",
          email: "",
          sub: "",
          msg: ""


      });
   
  const changeHandel= (e)=>{
    setFormvelue({...formvalue, id: new Date().getTime().toString(), [e.target.name]:e.target.value});


  }

  const submitHandel= async (e)=>{
    e.preventDefault();

    const res = await axios.post(`http://localhost:3000/contact`,formvalue)
    setFormvelue({...formvalue, id:"", name:"", email:"", sub:"", msg:""})
    toast.success(`data submit `)
    alert(`data success`)
    return false;

  }

  return (

    
    <div>
      <Helmet>

        <link rel="stylesheet" href="form/style.css" />
      </Helmet>


      <Header/>
       
<div className="container ">
  <div className="fom-b">
  <h1>Get In Touch</h1>
  <form action='' method="post" onSubmit={submitHandel}>
    <div className="form-group">
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" onChange={changeHandel} value={formvalue.name} name="name" />
    </div>
    <div className="form-group">
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" onChange={changeHandel} value={formvalue.email} name="email"  />
    </div>
    <div className="form-group">
      <label htmlFor="subject">Subject:</label>
      <input type="text" id="subject"onChange={changeHandel} value={formvalue.sub} name="sub"  />
    </div>
    <div className="form-group">
      <label htmlFor="message">Message:</label>
      <textarea id="message" onChange={changeHandel} value={formvalue.msg} name="msg"  />
    </div>
    <div className="form-group">
      <button type="submit" className='f-btn'>Submit</button>
    </div>
  </form></div>
  </div>
 


 <Footer/>

    </div>
  )
}

export default Contact
