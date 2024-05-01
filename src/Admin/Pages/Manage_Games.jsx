import React, { useEffect, useState } from 'react'
import Aheader from '../Component/Aheader'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


function Manage_Games() {


  const redirect=useNavigate();  
  const [data, setData] = useState([]);

  useEffect(() => {
   fetch();
}, []);

  const fetch = async ()=>{
     const res = await axios.get(`http://localhost:3000/games`)
     setData(res.data)
  }

  const deleteHandel = async (id) =>{
    const res = await axios.delete(`http://localhost:3000/games/${id}`)
    toast.success(`Data Delete Success`)
    fetch()
}
  return (
    <div>
      <Aheader />
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Manage Games</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item active"> Games</li>
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
                <th scope="col">Description</th>
                <th scope="col">Image</th>
                <th scope="col">Price</th>
                <th scope="col">Add/Delete</th>
               
              </tr>
            </thead>
            <tbody>
              
              {data && data.map((value, index, arr) => {
                        return (
                          <tr>
                            <td>{value.id}</td>
                            <td>{value.name}</td>
                            <td>{value.desc}</td>
                            <td><img src={value.image} alt="" width="40px"/></td>
                            <td>{value.price}</td>

                          
                            <td>
                            <button className='btn btn-primary' onClick={()=>redirect('/edit_games/' + value.id)}>Edit</button>
                            <button className='btn btn-danger ms-2' onClick={()=>{if(window.confirm('Are You Sure To Delete Data')){deleteHandel(value.id)}}}>Delete</button>
                            </td>
                          </tr>
                        );
                      })}
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Manage_Games
