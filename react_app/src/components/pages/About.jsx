import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from '../EmblaCarousel'
import './Home.css'

function About() {
  return (
    <div className="about-main-wrapper">
      <section className='banner'>
      
      </section>
      <section className="about-expanded">
        <div className="slider-container">
          <Carousel />
        </div>
        <div className="info">
          <h2>Ike is a designer and Illustrator specializing in digital
          art. He loves to tell stories through characters and design.
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            A nulla expedita distinctio molestiae fuga, in eos.
             Laudantium omnis commodi incidunt repellat sequi harum iusto!
             Dolorum nemo quas totam sit obcaecati?
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla corrupti et praesentium voluptate, odio deleniti dolore minima ipsa labore totam fugit voluptatem velit. Temporibus dignissimos quod optio, maxime quaerat aliquid!
             Eaque omnis molestias nemo dicta. Deserunt eaque esse molestias. Asperiores, repellat odio aspernatur ea voluptas vel quasi nihil perferendis est velit maxime, obcaecati, excepturi error quam eveniet harum aliquid. Reprehenderit.
        </p>
        </div>
        <div className='companies'>
          <ul>
            <li>disney</li>
          </ul>
        </div>
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
  )
}

export default About