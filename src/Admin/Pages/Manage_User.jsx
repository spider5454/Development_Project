import React, { useEffect, useState } from 'react'
import Aheader from '../Component/Aheader'
import axios from 'axios';
import { toast } from 'react-toastify';

function Manage_User() {
  const [data, setData] = useState([]);

  useEffect(() => {
      fetch();
  }, []);

  const fetch = async () => {
      const res = await axios.get(`http://localhost:3000/user`);
      console.log(res.data);
      setData(res.data);
  }

  const deleteHandel = async (id) => {
      const res = await axios.delete(`http://localhost:3000/user/${id}`);
      toast.success('Delete success');
      fetch();
  }

  const status = async (id) => {
       const res =  await axios.get(`http://localhost:3000/user/${id}`);
        if (res.data.status == "Unblock"){
       const response =await axios.patch(`http://localhost:3000/user/${id}`, {status: "Block"});
       
       if(response.status == 200){
        localStorage.removeItem(`uid`);
        localStorage.removeItem(`uname`);
        toast.success(`User Blocked Success`);
        fetch();
        return false;
       }

}
else{
      
       const response = await axios.patch(`http://localhost:3000/user/${id}`, {status: "Unblock"});
       if ( response.status == 200){
          toast.success(`User Unbloked Success`);
          fetch();
          return false;

       }

}



}


  return (
    <div>
       <Aheader />
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Manage User</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item active">User</li>
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
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Mobile</th>
                                            <th>Image</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data && data.map((value, index, arr) => {
                                                return (
                                                    <tr>
                                                        <td>{value.id}</td>
                                                        <td>{value.name}</td>
                                                        <td>{value.email}</td>
                                                        <td>{value.mobile}</td>
                                                        <td><img src={value.img} width="50px" alt="" /></td>
                                                        <td>
                                                           
                                                            <button className='btn btn-danger'  onClick={()=>deleteHandel(value.id)}>Delete</button>
                                                            <button className='btn btn-success ms-2' onClick={()=> status (value.id)}>{value.status}</button>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }


                                    </tbody>
          </table>
        </div>
      </div>




    </div>
  )
}

export default Manage_User
