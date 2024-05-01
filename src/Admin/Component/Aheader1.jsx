import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet';
import { NavLink, useNavigate } from 'react-router-dom';

function Aheader1() {

    const redirect=useNavigate();

    useEffect(()=>{
        if (localStorage.getItem('aid')) {
            return redirect('/adashboard')
        }
    },[]);
  return (
    <>
        <Helmet>
        
        <link href="admin/assets/img/favicon.png" rel="icon" />
        <link href="admin/assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
        <link href="admin/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="admin/assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
        <link href="admin/assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
        <link href="admin/assets/vendor/quill/quill.snow.css" rel="stylesheet" />
        <link href="admin/assets/vendor/quill/quill.bubble.css" rel="stylesheet" />
        <link href="admin/assets/vendor/remixicon/remixicon.css" rel="stylesheet" />
        <link href="admin/assets/vendor/simple-datatables/style.css" rel="stylesheet" />
        <link href="admin/assets/css/style.css" rel="stylesheet" />

  </Helmet>
  <div>

    
  <header id="header" className="header fixed-top d-flex align-items-center">
    <div className="d-flex align-items-center justify-content-between">
      <NavLink to="index.html" className="logo d-flex align-items-center">
        <img src="admin/assets/img/logo.png" alt />
        <span className="d-none d-lg-block">NiceAdmin</span>
      </NavLink>
      <i className="bi bi-list toggle-sidebar-btn" />
    </div>{/* End Logo */}
    <div className="search-bar">
      <form className="search-form d-flex align-items-center" method="POST" action="#">
        <input type="text" name="query" placeholder="Search" title="Enter search keyword" />
        <button type="submit" title="Search"><i className="bi bi-search" /></button>
      </form>
    </div>{/* End Search Bar */}
    <nav className="header-nav ms-auto">
      <ul className="d-flex align-items-center">
        <li className="nav-item d-block d-lg-none">
          <NavLink className="nav-link nav-icon search-bar-toggle " to="#">
            <i className="bi bi-search" />
          </NavLink>
        </li>{/* End Search Icon*/}
        
      </ul>
    </nav>{/* End Icons Navigation */}
  </header>{/* End Header */}



   {/* ======= Sidebar ======= */}

   
  
  
  
  
  {/* End Sidebar*/}
</div>


 

    </>
  )
}

export default Aheader1
