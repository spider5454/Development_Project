import React, { useEffect, useState } from 'react'
import Aheader from '../Component/Aheader'
import axios from 'axios';
import { toast } from 'react-toastify';

function Manage_Contact() {

    const [data , setData]= useState ([]);

    useEffect (()=>{
            fetch();
    }, [])

     const fetch = async ()=> {
       const res = await axios.get(`http://localhost:3000/contact`);
       setData(res.data)
       fetch()
     }
    
     const deleteHandel = async (id) => {
      const res = await axios.delete(`http://localhost:3000/contact/${id}`);
      toast.success('Delete success');
      fetch();
  }

  return (
    <div>
       <Aheader />
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Manage Contact</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item active">Manage Contact</li>
            </ol>
          </nav>
        </div>
        {/* End Page Title */}
      </main>
      {/* End #main */}








      <div className="card ">
        <div className="card-body">
          <table className="table table-dark">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Massage</th>
                <th scope="col">Subject</th>
                <th scope="col">Add/Delete</th>
               
              </tr>
            </thead>
            <tbody>
              {
                data && data.map((value, index, arr)=>{
                  return (
                    <tr>
                      <td>{value.id}</td>
                      <td>{value.name}</td>
                      <td>{value.email}</td>
                      <td>{value.sub}</td>
                      <td>{value.msg}</td>
                     

                    
                      <td>
                      <button className='btn btn-primary m-1'>Edit</button>
                      <button className='btn btn-danger'  onClick={()=>deleteHandel(value.id)}>Delete</button>
                      </td>
                    </tr>
                  );
                })
                   
                
               }
           
                     
                    
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Manage_Contact
