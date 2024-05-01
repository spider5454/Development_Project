import React from 'react'
import Footer from '../Component/Footer'
import Header from '../Component/Header'
import { Link } from 'react-router-dom'

function Shop() {
  return (
    <>
    <Header/>
      <section className="section shop" id="shop" aria-label="shop" style={{backgroundImage: 'url("file assesst/images/shop-bg.jpg")'}}>
  <div className="container">
    <h2 className="h2 section-title">
      Gaming Product <span className="span">Corner</span>
    </h2>
    <p className="section-text">
      Compete with 100 players on a remote island for winner takes showdown known issue where certain skin
      strategic
    </p>
    <ul className="has-scrollbar">
      <li className="scrollbar-item">
        <div className="shop-card">
          <figure className="card-banner img-holder" style={{width: 300, height: 260}}>
            <img src="file assesst/images/shop-img-1.jpg" width={300} height={260} loading="lazy" alt="Women Black T-Shirt" className="img-cover" />
          </figure>
          <div className="card-content">
            <Link to="#" className="card-badge skewBg">t-shirt</Link>
            <h3 className="h3">
              <Link to="#" className="card-title">Women Black T-Shirt</Link>
            </h3>
            <div className="card-wrapper">
              <p className="card-price">$29.00</p>
              <button className="card-btn">
                <ion-icon name="basket" />
              </button>
            </div>
          </div>
        </div>
      </li>
      <li className="scrollbar-item">
        <div className="shop-card">
          <figure className="card-banner img-holder" style={{width: 300, height: 260}}>
            <img src="file assesst/images/shop-img-2.jpg" width={300} height={260} loading="lazy" alt="Gears 5 Xbox Controller" className="img-cover" />
          </figure>
          <div className="card-content">
            <Link to="#" className="card-badge skewBg">x-box</Link>
            <h3 className="h3">
              <Link to="#" className="card-title">Gears 5 Xbox Controller</Link>
            </h3>
            <div className="card-wrapper">
              <p className="card-price">$29.00</p>
              <button className="card-btn">
                <ion-icon name="basket" />
              </button>
            </div>
          </div>
        </div>
      </li>
      <li className="scrollbar-item">
        <div className="shop-card">
          <figure className="card-banner img-holder" style={{width: 300, height: 260}}>
            <img src="file assesst/images/shop-img-3.jpg" width={300} height={260} loading="lazy" alt="GeForce RTX 2070" className="img-cover" />
          </figure>
          <div className="card-content">
            <Link to="#" className="card-badge skewBg">Graphics</Link>
            <h3 className="h3">
              <Link to="#" className="card-title">GeForce RTX 2070</Link>
            </h3>
            <div className="card-wrapper">
              <p className="card-price">$29.00</p>
              <button className="card-btn">
                <ion-icon name="basket" />
              </button>
            </div>
          </div>
        </div>
      </li>
      <li className="scrollbar-item">
        <div className="shop-card">
          <figure className="card-banner img-holder" style={{width: 300, height: 260}}>
            <img src="file assesst/images/shop-img-4.jpg" width={300} height={260} loading="lazy" alt="Virtual Reality Smiled" className="img-cover" />
          </figure>
          <div className="card-content">
            <Link to="#" className="card-badge skewBg">VR-Box</Link>
            <h3 className="h3">
              <Link to="#" className="card-title">Virtual Reality Smiled</Link>
            </h3>
            <div className="card-wrapper">
              <p className="card-price">$29.00</p>
              <button className="card-btn">
                <ion-icon name="basket" />
              </button>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</section>
<Footer/>
    </>
  )
}

export default Shop
