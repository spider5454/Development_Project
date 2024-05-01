import React from 'react'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import { Link } from 'react-router-dom'

function Blog() {
  return (
    <>
    <Header/>
      <section className="section blog" id="blog" aria-label="blog">
  <div className="container">
    <h2 className="h2 section-title">
      Latest News &amp; <span className="span">Articles</span>
    </h2>
    <p className="section-text">
      Compete With 100 Players On A Remote Island For Winner Takes Showdown Known Issue Where Certain Skin
      Strategic
    </p>
    <ul className="blog-list">
      <li>
        <div className="blog-card">
          <figure className="card-banner img-holder" style={{width: 400, height: 290}}>
            <img src="file assesst/images/blog-1.jpg" width={400} height={290} loading="lazy" alt="Shooter Action Video" className="img-cover" />
          </figure>
          <div className="card-content">
            <ul className="card-meta-list">
              <li className="card-meta-item">
                <ion-icon name="person-outline" />
                <Link to="#" className="item-text">Admin</Link>
              </li>
              <li className="card-meta-item">
                <ion-icon name="calendar-outline" />
                <time dateTime="2022-09-19" className="item-text">September 19, 2022</time>
              </li>
            </ul>
            <h3>
              <Link to="#" className="card-title">Shooter Action Video</Link>
            </h3>
            <p className="card-text">
              Compete With 100 Players On A Remote Island Thats Winner Takes Showdown Known Issue.
            </p>
            <Link to="#" className="card-link">
              <span className="span">Read More</span>
              <ion-icon name="caret-forward" />
            </Link>
          </div>
        </div>
      </li>
      <li>
        <div className="blog-card">
          <figure className="card-banner img-holder" style={{width: 400, height: 290}}>
            <img src="file assesst/images/blog-2.jpg" width={400} height={290} loading="lazy" alt="The Walking Dead" className="img-cover" />
          </figure>
          <div className="card-content">
            <ul className="card-meta-list">
              <li className="card-meta-item">
                <ion-icon name="person-outline" />
                <Link to="#" className="item-text">Admin</Link>
              </li>
              <li className="card-meta-item">
                <ion-icon name="calendar-outline" />
                <time dateTime="2022-09-19" className="item-text">September 19, 2022</time>
              </li>
            </ul>
            <h3>
              <Link to="#" className="card-title">The Walking Dead</Link>
            </h3>
            <p className="card-text">
              Compete With 100 Players On A Remote Island Thats Winner Takes Showdown Known Issue.
            </p>
            <Link to="#" className="card-link">
              <span className="span">Read More</span>
              <ion-icon name="caret-forward" />
            </Link>
          </div>
        </div>
      </li>
      <li>
        <div className="blog-card">
          <figure className="card-banner img-holder" style={{width: 400, height: 290}}>
            <img src="file assesst/images/blog-3.jpg" width={400} height={290} loading="lazy" alt="Defense Of The Ancients" className="img-cover" />
          </figure>
          <div className="card-content">
            <ul className="card-meta-list">
              <li className="card-meta-item">
                <ion-icon name="person-outline" />
                <Link to="#" className="item-text">Admin</Link>
              </li>
              <li className="card-meta-item">
                <ion-icon name="calendar-outline" />
                <time dateTime="2022-09-19" className="item-text">September 19, 2022</time>
              </li>
            </ul>
            <h3>
              <Link to="#" className="card-title">Defense Of The Ancients</Link>
            </h3>
            <p className="card-text">
              Compete With 100 Players On A Remote Island Thats Winner Takes Showdown Known Issue.
            </p>
            <Link to="#" className="card-link">
              <span className="span">Read More</span>
              <ion-icon name="caret-forward" />
            </Link>
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

export default Blog
