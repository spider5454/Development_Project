import React, { useEffect, useState } from 'react'
import Footer from '../Component/Footer'
import Header from '../Component/Header'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

function Features() {


  const redirect=useNavigate();
  const [data, setData] = useState([]);
  
  useEffect(() => {
      fetch();
  }, []);

  const fetch = async () => {
      const res = await axios.get(`http://localhost:3000/games`);
      console.log(res.data);
      setData(res.data);
  }
  return (
    <>
    <Header/>
      <section className="section featured-game" id="features" aria-label="featured game">
  <div className="container">
    <h2 className="h2 section-title">
      All Released <span className="span">Games</span>
    </h2>
    <ul className="has-scrollbar">
      {/* <li className="scrollbar-item">
        <div className="featured-game-card">
          <figure className="card-banner img-holder" style={{width: 450, height: 600}}>
            <img src="file assesst/images/featured-game-1.jpg" width={450} height={600} loading="lazy" alt="Just for Gamers" className="img-cover" />
          </figure>
          <div className="card-content">
            <h3 className="h3">
              <Link href="#" className="card-title" tabIndex={-1}>
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
              <Link href="#" className="card-title">
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
              <Link href="#" className="card-title" tabIndex={-1}>
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
              <Link href="#" className="card-title">
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
              <Link href="#" className="card-title" tabIndex={-1}>
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
              <Link href="#" className="card-title">
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
              <Link href="#" className="card-title" tabIndex={-1}>
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
              <Link href="#" className="card-title">
                Just for <span className="span">Gamers</span>
              </Link>
            </h3>
            <span className="card-meta">
              <ion-icon name="notifications" />
              <span className="span">Playstation 5, Xbox</span>
            </span>
          </div>
        </div>
      </li> */}

        
      {
                            data && data.map((value, index, arr) => {
                                return (
                                  <li className="scrollbar-item">
                                  <div className="featured-game-card">
                                    <figure className="card-banner img-holder" style={{width: 450, height: 600}}>
                                      <img src={value.image} width={450} height={600} loading="lazy" alt="Just for Gamers" className="img-cover" />
                                    </figure>
                                    <div className="card-content">
                                      <h3 className="h3">
                                        <Link href="#" className="card-title" tabIndex={-1}>
                                          Just for <span className="span">{value.name}</span>
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
                                        <Link href="#" className="card-title">
                                          Just for <span className="span">{value.name}</span>
                                        </Link>
                                      </h3>
                                      <span className="card-meta">
                                        <ion-icon name="notifications" />
                                        <span className="span">Playstation 5, Xbox</span>
                                        <a className="btn btn-lg btn-primary rounded" href="javascript:void(0)" onClick={()=>redirect('/View_features/'+ value.id)}>
                                                More
                                            </a>


                                            
                                      </span>
                                    </div>
                                  </div>
                                </li>
                                )
                            })
                        }

      
    </ul>
    <ul className="has-scrollbar">
   

        
      {
                            data && data.map((value, index, arr) => {
                                return (
                                  <li className="scrollbar-item">
                                  <div className="featured-game-card">
                                    <figure className="card-banner img-holder" style={{width: 450, height: 600}}>
                                      <img src={value.image} width={450} height={600} loading="lazy" alt="Just for Gamers" className="img-cover" />
                                    </figure>
                                    <div className="card-content">
                                      <h3 className="h3">
                                        <Link href="#" className="card-title" tabIndex={-1}>
                                          Just for <span className="span">{value.name}</span>
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
                                        <Link href="#" className="card-title">
                                          Just for <span className="span">{value.name}</span>
                                        </Link>
                                      </h3>
                                      <span className="card-meta">
                                        <ion-icon name="notifications" />
                                        <span className="span">Playstation 5, Xbox</span>
                                        <a className="btn btn-lg btn-primary rounded" href="javascript:void(0)" onClick={()=>redirect('/View_features/'+ value.id)}>
                                                More
                                            </a>


                                            
                                      </span>
                                    </div>
                                  </div>
                                </li>
                                )
                            })
                        }

      
    </ul>
  </div>
</section>
<Footer/>
    </>
  )
}

export default Features
