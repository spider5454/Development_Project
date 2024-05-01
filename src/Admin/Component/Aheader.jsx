import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import {  NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

function Aheader() {

  useEffect(()=>{
    if (localStorage.getItem('aid')) {
    }
    else {
        return redirect('/alogin')
    }
},[]);


const redirect=useNavigate();
const adminlogout=()=>{
    localStorage.removeItem('aid');
    localStorage.removeItem('aname');
    toast.success('Logout Success ');
    redirect('/alogin');
    return false;    
}
     
 
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
        <li className="nav-item dropdown">
          <NavLink className="nav-link nav-icon" to="#" data-bs-toggle="dropdown">
            <i className="bi bi-bell" />
            <span className="badge bg-primary badge-number">4</span>
          </NavLink>{/* End Notification Icon */}
          <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
            <li className="dropdown-header">
              You have 4 new notifications
              <NavLink to="#"><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></NavLink>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li className="notification-item">
              <i className="bi bi-exclamation-circle text-warning" />
              <div>
                <h4>Lorem Ipsum</h4>
                <p>Quae dolorem earum veritatis oditseno</p>
                <p>30 min. ago</p>
              </div>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li className="notification-item">
              <i className="bi bi-x-circle text-danger" />
              <div>
                <h4>Atque rerum nesciunt</h4>
                <p>Quae dolorem earum veritatis oditseno</p>
                <p>1 hr. ago</p>
              </div>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li className="notification-item">
              <i className="bi bi-check-circle text-success" />
              <div>
                <h4>Sit rerum fuga</h4>
                <p>Quae dolorem earum veritatis oditseno</p>
                <p>2 hrs. ago</p>
              </div>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li className="notification-item">
              <i className="bi bi-info-circle text-primary" />
              <div>
                <h4>Dicta reprehenderit</h4>
                <p>Quae dolorem earum veritatis oditseno</p>
                <p>4 hrs. ago</p>
              </div>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li className="dropdown-footer">
              <NavLink to="#">Show all notifications</NavLink>
            </li>
          </ul>{/* End Notification Dropdown Items */}
        </li>{/* End Notification Nav */}
        <li className="nav-item dropdown">
          <NavLink className="nav-link nav-icon" to="#" data-bs-toggle="dropdown">
            <i className="bi bi-chat-left-text" />
            <span className="badge bg-success badge-number">3</span>
          </NavLink>{/* End Messages Icon */}
          <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
            <li className="dropdown-header">
              You have 3 new messages
              <NavLink to="#"><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></NavLink>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li className="message-item">
              <NavLink to="#">
                <img src="admin/assets/img/messages-1.jpg" alt className="rounded-circle" />
                <div>
                  <h4>Maria Hudson</h4>
                  <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                  <p>4 hrs. ago</p>
                </div>
              </NavLink>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li className="message-item">
              <NavLink to="#">
                <img src="admin/assets/img/messages-2.jpg" alt className="rounded-circle" />
                <div>
                  <h4>Anna Nelson</h4>
                  <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                  <p>6 hrs. ago</p>
                </div>
              </NavLink>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li className="message-item">
              <NavLink to="#">
                <img src="admin/assets/img/messages-3.jpg" alt className="rounded-circle" />
                <div>
                  <h4>David Muldon</h4>
                  <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                  <p>8 hrs. ago</p>
                </div>
              </NavLink>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li className="dropdown-footer">
              <NavLink to="#">Show all messages</NavLink>
            </li>
          </ul>{/* End Messages Dropdown Items */}
        </li>{/* End Messages Nav */}
        <li className="nav-item dropdown pe-3">
          <NavLink className="nav-link nav-profile d-flex align-items-center pe-0"  data-bs-toggle="dropdown">
            <img src="admin/assets/img/profile-img.jpg" alt="Profile" className="rounded-circle" />
            <span className="d-none d-md-block dropdown-toggle ps-2">Pankaj</span>
          </NavLink>{/* End Profile Iamge Icon */}
          <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
            <li className="dropdown-header">
              <h6>Makwana Pankaj</h6>
              <span>Web Devloper</span>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <NavLink className="dropdown-item d-flex align-items-center" >
                <i className="bi bi-person" />
                <span>My Profile</span>
              </NavLink>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <NavLink className="dropdown-item d-flex align-items-center" >
                <i className="bi bi-gear" />
                <span>Account Settings</span>
              </NavLink>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <NavLink className="dropdown-item d-flex align-items-center">
                <i className="bi bi-question-circle" />
                <span>Need Help?</span>
              </NavLink>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
             
            <NavLink className="dropdown-item d-flex align-items-center" >
                <i className="bi bi-question-circle" />
              
                <span>   <a href="javascript:void(0)" onClick={adminlogout}   >LOGOUT</a></span>
              </NavLink>
             
            </li>
          </ul>{/* End Profile Dropdown Items */}
        </li>{/* End Profile Nav */}
      </ul>
    </nav>{/* End Icons Navigation */}
  </header>{/* End Header */}





  {/* ======= Sidebar ======= */}
  <aside id="sidebar" className="sidebar">
    <ul className="sidebar-nav" id="sidebar-nav">
      <li className="nav-item">
        <NavLink className="nav-link " to="/adashboard">
          <i className="bi bi-grid" />
          <span>Dashboard</span>
        </NavLink>
      </li>{/* End Dashboard Nav */}
    
     
      <li className="nav-item">
        <NavLink className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" to="#">
          <i className="bi bi-layout-text-window-reverse" /><span>Features</span><i className="bi bi-chevron-down ms-auto" />
        </NavLink>
        <ul id="tables-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <NavLink to="/add_games">
              <i className="bi bi-circle" /><span>Add Games</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/edit_games">
              <i className="bi bi-circle" /><span>Edit Games</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/manage_games">
              <i className="bi bi-circle" /><span>Manage Games</span>
            </NavLink>
          </li>
        </ul>
      </li>{/* End Tables Nav */}
      <li className="nav-item">
        <NavLink className="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" to="#">
        <i className="bi bi-layout-text-window-reverse" /><span> Shop</span><i className="bi bi-chevron-down ms-auto" />
        </NavLink>
        <ul id="charts-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <NavLink to="/add_product">
              <i className="bi bi-circle" /><span>Add Products</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/manage_product">
              <i className="bi bi-circle" /><span>Manage Products</span>
            </NavLink>
          </li>
        
        </ul>
      </li>
    
      <li className="nav-heading">Pages</li>
      <li className="nav-item">
        <NavLink className="nav-link collapsed" to="/user">
          <i className="bi bi-person" />
          <span>User</span>
        </NavLink>
      </li>{/* End Profile Page Nav */}
     
      <li className="nav-item">
        <NavLink className="nav-link collapsed" to="/manage_contact">
          <i className="bi bi-envelope" />
          <span>Contact</span>
        </NavLink>
      </li>{/* End Contact Page Nav */}
     
      <li className="nav-item">
        <NavLink className="nav-link collapsed" to="/alogin">
          <i className="bi bi-box-arrow-in-right" />
          <span>Login</span>
        </NavLink>
      </li>{/* End Login Page Nav */}
     
    </ul>
  </aside>{/* End Sidebar*/}
</div>


    </>
  )
}

export default Aheader
