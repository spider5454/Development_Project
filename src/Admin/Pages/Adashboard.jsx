import React from 'react'
import Aheader from '../Component/Aheader'
import { Helmet } from 'react-helmet'

function Adashboard() {
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

          
      <Aheader/>

      <main id="main" className="main">
            <div className="pagetitle">
                 <h1>Dashboard</h1>
            <nav>
               <ol className="breadcrumb">
               <li className="breadcrumb-item active">Dashboard</li>
              </ol>
            </nav>
            </div>

      </main> 




      
    </>
  )
}

export default Adashboard
