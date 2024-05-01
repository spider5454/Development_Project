import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  
  const redirect = useNavigate();

  const userLogout = () => {
    localStorage.removeItem('uid');
    localStorage.removeItem('uname');
    toast.success('Logout Success ');
    redirect('/');
    return false;
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="file assesst/css/style.css" />
        <script src="&BASE_URL%/file assesst/js/script.js"></script>
      </Helmet>
      <header className="header">
        <div className="header-top">
          <div className="container">
            <div className="countdown-text">
              Exclusive Black Friday ! Offer <span className="span skewBg">10</span> Days
            </div>
            {/* {localStorage.getItem('uid') && (
              <small className="text-light">
                <i className="fa fa-user ms-5 me-2" />Hi.. {localStorage.getItem('uname')}
              </small>
              
            )} */}
                  {(
                     () => { if (localStorage.getItem('uid')) {
                                        return (
                                            <>
                                            <small className="text-light"><i className="fa fa-user ms-5 me-2" />Hi.. {localStorage.getItem('uname')}</small>
                                            <small className="text-light d-flex align-items-center"><i className="fa fa-user ms-5 me-2" /><Link to="/profile">My Account</Link></small>
                                            </>
                                            )
                                    }
                                }
                            )()}

            <div className="social-wrapper">
              <p className="social-title">Follow us on :</p>
              <ul className="social-list">
                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-pinterest"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="header-bottom skewBg" data-header>
          <div className="container">
            <a href="#" className="logo">
              Gamics
            </a>
            <nav className={`navbar ${isNavOpen ? 'active' : ''}`} data-navbar>
              <ul className="navbar-list">
                <li className="navbar-item">
                  <NavLink exact to="/" className="navbar-link skewBg" data-nav-link onClick={toggleNav}>
                    Home
                  </NavLink>
                </li>
                <li className="navbar-item">
                  <NavLink to="/live" className="navbar-link skewBg" data-nav-link onClick={toggleNav}>
                    Live
                  </NavLink>
                </li>
                <li className="navbar-item">
                  <NavLink to="/features" className="navbar-link skewBg" data-nav-link onClick={toggleNav}>
                    Features
                  </NavLink>
                </li>
                <li className="navbar-item">
                  <NavLink to="/shop" className="navbar-link skewBg" data-nav-link onClick={toggleNav}>
                    Shop
                  </NavLink>
                </li>
                <li className="navbar-item">
                  <NavLink to="/blog" className="navbar-link skewBg" data-nav-link onClick={toggleNav}>
                    Blog
                  </NavLink>
                </li>
                <li className="navbar-item">
                  <NavLink to="/contact" className="navbar-link skewBg" data-nav-link onClick={toggleNav}>
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
            <div className="header-actions">
              <button className="search-btn" aria-label="open search" data-search-toggler>
                <ion-icon name="search-outline"></ion-icon>
              </button>
              {localStorage.getItem('uid') ? (
                <a href="javascript:void(0)" onClick={userLogout} className="btn btn-primary py-2 px-4 ms-3">
                  Logout
                </a>
              ) : (
                <Link to="/login" className="btn btn-primary py-2 px-4 ms-3 ">
                  Login
                </Link>
              )}
            <button className="nav-toggle-btn" aria-label="toggle menu" data-nav-toggler onClick={toggleNav}>
               {isNavOpen ? ( <ion-icon name="close-outline" className="close"></ion-icon>) :
                ( <ion-icon name="menu-outline" className="menu"></ion-icon>)}
            </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
