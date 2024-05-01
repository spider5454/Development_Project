import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Header from '../Component/Header';
import Footer from '../Component/Footer';

function View_features() {

    const [data, setData] = useState([]);


    useEffect(() => {
        fetch();
        
    }, []);

    const {id}=useParams();
    
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/games?id=${id}`);
     
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
   
    <li>


        
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
                                     
                                      <h3 className="h3">
                                        <Link href="#" className="card-title">
                                          Just for <span className="span">{value.price}.Rs</span>
                                        </Link>
                                      </h3>
                                      <span className="card-meta">
                                        <ion-icon name="notifications" />
                                        <span className="span">Playstation 5, Xbox</span>
                                     
                                      </span>
                                    </div>
                                  </div>
                                </li>
                                )
                            })
                        }
    </li>

      
    </ul>
  </div>
</section>

      <Footer/>
    </>
  )
}

export default View_features
