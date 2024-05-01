import React from 'react'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import { Link } from 'react-router-dom'

function Home() {



  return (


    
    <>
    <Header/>

  


<section className="section hero" id="home" aria-label="home" style={{backgroundImage: 'url("file assesst/images/hero-bg.jpg")'}}>
  <div className="container">
    <div className="hero-content">
      <p className="hero-subtitle">World Gaming</p>
      <h1 className="h1 title-name hero-title">
        Create <span className="span">Manage</span> Matches
      </h1>
      <p className="hero-text">
        Find technology or people for digital projects in public sector and Find an individual specialist develope
        researcher.
      </p>
      <button className="btns skewBg">Read More</button>
    </div>
    <figure className="hero-banner img-holder" style={{width: 700, height: 700}}>
      <img src="file assesst/images/hero-banner.png" width={700} height={700} alt="hero banner" className="w-100" />
    </figure>
  </div>
</section>


<section className="section brand" aria-label="brand">
  <div className="container">
    <ul className="has-scrollbar">
      <li className="brand-item">
        <img src="file assesst/images/brand-1.png" width={90} height={90} loading="lazy" alt="brand logo" />
      </li>
      <li className="brand-item">
        <img src="file assesst/images/brand-2.png" width={90} height={90} loading="lazy" alt="brand logo" />
      </li>
      <li className="brand-item">
        <img src="file assesst/images/brand-3.png" width={90} height={90} loading="lazy" alt="brand logo" />
      </li>
      <li className="brand-item">
        <img src="file assesst/images/brand-4.png" width={90} height={90} loading="lazy" alt="brand logo" />
      </li>
      <li className="brand-item">
        <img src="file assesst/images/brand-5.png" width={90} height={90} loading="lazy" alt="brand logo" />
      </li>
      <li className="brand-item">
        <img src="file assesst/images/brand-6.png" width={90} height={90} loading="lazy" alt="brand logo" />
      </li>
    </ul>
  </div>
</section>

<div className="section-wrapper">
  {/* 
  - #LATEST GAME
*/}
  <section className="section latest-game" aria-label="latest game">
    <div className="container">
      <p className="section-subtitle">Latest Releases</p>
      <h2 className="h2 section-title">
        Create &amp; <span className="span">Manage</span>
      </h2>
      <ul className="has-scrollbar">
        <li className="scrollbar-item">
          <div className="latest-game-card">
            <figure className="card-banner img-holder" style={{width: 400, height: 470}}>
              <img src="file assesst/images/latest-game-1.jpg" width={400} height={470} loading="lazy" alt="White Walker Daily" className="img-cover" />
            </figure>
            <div className="card-content">
              <Link to="#" className="card-badge skewBg">Zombie</Link>
              <h3 className="h3">
                <Link to="#" className="card-title">White Walker <span className="span">Daily</span></Link>
              </h3>
              <p className="card-price">
                Entry Fee : <span className="span">Free</span>
              </p>
            </div>
          </div>
        </li>
        <li className="scrollbar-item">
          <div className="latest-game-card">
            <figure className="card-banner img-holder" style={{width: 400, height: 470}}>
              <img src="file assesst/images/latest-game-2.jpg" width={400} height={470} loading="lazy" alt="Hunter Killer II" className="img-cover" />
            </figure>
            <div className="card-content">
              <Link to="#" className="card-badge skewBg">Adventure</Link>
              <h3 className="h3">
                <Link to="#" className="card-title">Hunter Killer <span className="span">II</span></Link>
              </h3>
              <p className="card-price">
                Entry Fee : <span className="span">$25.00</span>
              </p>
            </div>
          </div>
        </li>
        <li className="scrollbar-item">
          <div className="latest-game-card">
            <figure className="card-banner img-holder" style={{width: 400, height: 470}}>
              <img src="file assesst/images/latest-game-3.jpg" width={400} height={470} loading="lazy" alt="Cyberpunk Daily" className="img-cover" />
            </figure>
            <div className="card-content">
              <Link to="#" className="card-badge skewBg">Action</Link>
              <h3 className="h3">
                <Link to="#" className="card-title">Cyberpunk <span className="span">Daily</span></Link>
              </h3>
              <p className="card-price">
                Entry Fee : <span className="span">$25.00</span>
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
  {/* 
  - #LIVE MATCH
*/}
  <section className="section live-match" id="live" aria-label="live match">
    <div className="container">
      <h2 className="h2 section-title">
        Watch Live <span className="span">Match</span>
      </h2>
      <figure className="live-match-banner img-holder" style={{width: 800, height: 470}}>
        <img src="file assesst/images/live-match-banner.jpg" width={800} height={470} loading="lazy" alt="Live Match Video" className="img-cover" />
        <button className="play-btn" aria-label="play video">
          <ion-icon name="play" />
        </button>
      </figure>
      <div className="live-match-player">
        <figure className="player player-1 img-holder" style={{width: 406, height: 277}}>
          <img src="file assesst/images/live-match-player-1.png" width={406} height={277} loading="lazy" alt="tokyo eagle" className="w-100" />
        </figure>
        <div className="live-match-detail">
          <p className="live-match-subtitle">Upcoming Live Matches</p>
          <time className="live-match-time" dateTime="08:30">08:30</time>
        </div>
        <figure className="player player-2 img-holder" style={{width: 400, height: 305}}>
          <img src="file assesst/images/live-match-player-2.png" width={400} height={305} loading="lazy" alt="new york hunter7" className="w-100" />
        </figure>
      </div>
    </div>
  </section>
</div>



{/* 
  - #FEATURED GAME
*/}
<section className="section featured-game" id="features" aria-label="featured game">
  <div className="container">
    <h2 className="h2 section-title">
      All Released <span className="span">Games</span>
    </h2>
    <ul className="has-scrollbar">
      <li className="scrollbar-item">
        <div className="featured-game-card">
          <figure className="card-banner img-holder" style={{width: 450, height: 600}}>
            <img src="file assesst/images/featured-game-1.jpg" width={450} height={600} loading="lazy" alt="Just for Gamers" className="img-cover" />
          </figure>
          <div className="card-content">
            <h3 className="h3">
              <Link to="#" className="card-title" tabIndex={-1}>
                Just for <span className="span">Gamers</span>
              </Link>
            </h3>
            <span className="card-meta">
              <ion-icon name="notifications" />
              <span className="span">Playstation 5, Xbox</span>
            </span>
          </div>
          <div className="card-content-overlay">
            <img src="file assesst/images/featured-game-icon.png" width={36} height={61} loading="lazy" alt='' className="card-icon" />
            <h3 className="h3">
              <Link to="#" className="card-title">
                Just for <span className="span">Gamers</span>
              </Link>
            </h3>
            <span className="card-meta">
              <ion-icon name="notifications" />
              <span className="span">Playstation 5, Xbox</span>
            </span>
          </div>
        </div>
      </li>
      <li className="scrollbar-item">
        <div className="featured-game-card">
          <figure className="card-banner img-holder" style={{width: 450, height: 600}}>
            <img src="file assesst/images/featured-game-2.jpg" width={450} height={600} loading="lazy" alt="Need for Speed" className="img-cover" />
          </figure>
          <div className="card-content">
            <h3 className="h3">
              <Link to="#" className="card-title" tabIndex={-1}>
                Need for <span className="span">Speed</span>
              </Link>
            </h3>
            <span className="card-meta">
              <ion-icon name="notifications" />
              <span className="span">Playstation 5, Xbox</span>
            </span>
          </div>
          <div className="card-content-overlay">
            <img src="file assesst/images/featured-game-icon.png" width={36} height={61} loading="lazy" alt='' className="card-icon" />
            <h3 className="h3">
              <Link to="#" className="card-title">
                Need for <span className="span">Speed</span>
              </Link>
            </h3>
            <span className="card-meta">
              <ion-icon name="notifications" />
              <span className="span">Playstation 5, Xbox</span>
            </span>
          </div>
        </div>
      </li>
      <li className="scrollbar-item">
        <div className="featured-game-card">
          <figure className="card-banner img-holder" style={{width: 450, height: 600}}>
            <img src="file assesst/images/featured-game-3.jpg" width={450} height={600} loading="lazy" alt="Egypt Hunting Gamers" className="img-cover" />
          </figure>
          <div className="card-content">
            <h3 className="h3">
              <Link to="#" className="card-title" tabIndex={-1}>
                Egypt Hunting <span className="span">Gamers</span>
              </Link>
            </h3>
            <span className="card-meta">
              <ion-icon name="notifications" />
              <span className="span">Playstation 5, Xbox</span>
            </span>
          </div>
          <div className="card-content-overlay">
            <img src="file assesst/images/featured-game-icon.png" width={36} height={61} loading="lazy" alt='' className="card-icon" />
            <h3 className="h3">
              <Link to="#" className="card-title">
                Egypt Hunting <span className="span">Gamers</span>
              </Link>
            </h3>
            <span className="card-meta">
              <ion-icon name="notifications" />
              <span className="span">Playstation 5, Xbox</span>
            </span>
          </div>
        </div>
      </li>
      <li className="scrollbar-item">
        <div className="featured-game-card">
          <figure className="card-banner img-holder" style={{width: 450, height: 600}}>
            <img src="file assesst/images/featured-game-4.jpg" width={450} height={600} loading="lazy" alt="Just for Gamers" className="img-cover" />
          </figure>
          <div className="card-content">
            <h3 className="h3">
              <Link to="#" className="card-title" tabIndex={-1}>
                Just for <span className="span">Gamers</span>
              </Link>
            </h3>
            <span className="card-meta">
              <ion-icon name="notifications" />
              <span className="span">Playstation 5, Xbox</span>
            </span>
          </div>
          <div className="card-content-overlay">
            <img src="file assesst/images/featured-game-icon.png" width={36} height={61} loading="lazy" alt='' className="card-icon" />
            <h3 className="h3">
              <Link to="#" className="card-title">
                Just for <span className="span">Gamers</span>
              </Link>
            </h3>
            <span className="card-meta">
              <ion-icon name="notifications" />
              <span className="span">Playstation 5, Xbox</span>
            </span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</section>


{/* 
  - #SHOP
*/}
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

{/* 
  - #BLOG
*/}
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

{/* 
  - #NEWSLETTER
*/}
<section className="newsletter" aria-label="newsletter">
  <div className="container">
    <div className="newsletter-card">
      <h2 className="h2">
        Our <span className="span">Newsletter</span>
      </h2>
      <form action className="newsletter-form">
        <div className="input-wrapper skewBg">
          <input type="email" name="email_address" aria-label="email" placeholder="Enter your email..." required className="email-field" />
          <ion-icon name="mail-outline" />
        </div>
        <button type="submit" className="btn newsletter-btn skewBg">
          <span className="span">Subscribe</span>
          <ion-icon name="paper-plane" aria-hidden="true" />
        </button>
      </form>
    </div>
  </div>
</section>
<Footer/>
    </>
  )
}

export default Home
