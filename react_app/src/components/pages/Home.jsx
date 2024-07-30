import React from 'react'
import { Link } from 'react-router-dom'
import Cards from '../Cards'
import './Home.css'

function Home() {
  return (
    <>
    <div className="main-wrapper">
      <section className='banner'>
         <h1>Ike is a designer and Illustrator specializing in digital
          art. He loves to tell stories through characters and design.
         </h1>
         <Link to="/About" className="nav-links">
                    Learn More
                    <hr />
        </Link>
      </section>
      <section className='works-preview'>
        <div className='heading'>
          <h1>Works and Illustrations</h1>
        </div>
        <Cards />
      </section>
    
    <footer>
      <div className="footer-container">
        <section className="social">
          <ul>
          <i className="fa-brands fa-square-x-twitter fa-2xl"></i>
          <i className="fa-brands fa-square-instagram fa-2xl"></i>
          <i className="fa-brands fa-bluesky fa-2xl"></i>
          <i className="fa-brands fa-square-tumblr fa-2xl"></i>
        </ul>
          <span>@2024 Ike</span>
        </section>
      </div>
    </footer>
    </div>
    </>
  )
}

export default Home