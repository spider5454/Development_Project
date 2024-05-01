import React, { useEffect, useState } from 'react'
import Aheader from '../Component/Aheader'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

function Edit_games() {

    const redirect=useNavigate();

    const [formvalue, setFormvalue] = useState({
   
         id: '',
         name: '',
         desc: '',
         image: '',
         price: ''
    });

   
    
    useEffect(() => {
        fetch();
    }, []);

    const {id}=useParams();

    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/games/${id}`);
    
        setFormvalue(res.data);
    }



    const changeHandel = (e) => {
        setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
      
    }
    function validation() {
        var res = true;
        if (formvalue.name == "") {
            toast.error("Games Name Field is required !");
            res = false;
            return false;
        }
        if (formvalue.image == "") {
            toast.error("Add img url Field is required !");
            res = false;
            return false;
        }
        
        return res;
    }
    const submitHandel = async (e) => {
        e.preventDefault(); // not reload page
        if(validation())
        {
            const res = await axios.patch(`http://localhost:3000/games/${id}`, formvalue);
            setFormvalue({ ...formvalue, name: "", image: "" });
            toast.success('Data Update success');
            redirect('/manage_games');
            return false;
        }
    }






  return (
    <>

<div>
        <Aheader/>

        <main id="main" className="main">
  <div className="pagetitle">
    <h1>Edit Games</h1>
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
        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Games Name</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" value={formvalue.name} onChange={changeHandel} name='name' id="inputText" placeholder='Enter Name' />
        </div>
      </div>
    
      <div className="row mb-3">
        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Image</label>
        <div className="col-sm-10">
        <input type='url' className="form-control"  value={formvalue.image} onChange={changeHandel} name='image' id="inputtext" placeholder='Enter Image URL' />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Description</label>
        <div className="col-sm-10">
        <input type='text' className="form-control"  value={formvalue.desc} onChange={changeHandel} name='desc' id="inputtext" placeholder='Enter Description' />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Price</label>
        <div className="col-sm-10">
        <input type='text' className="form-control"  value={formvalue.price} onChange={changeHandel} name='price' id="inputtext" placeholder='Enter Price' />
        </div>
      </div>
    
    
      
      <div className="text-center">
        <button type="submit" className="btn btn-primary">Submit</button>
      
      </div>
    </form>{/* End Horizontal Form */}
  </div>
</div>

      
    </div>


      
    </>
  )
}

export default Edit_games
