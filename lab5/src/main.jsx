import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import forest from './assets/img4.jpg'
import User from './comments.jsx';
// import images
import batman_avatar from './assets/icon3.png'
import businessman_avatar from './assets/icon1.png'
import oldwoman_avatar from './assets/icon2.png'

const App = function() {
  // define a variable name (This is done outside the return)
  let fullName = "Jahiem Mcleod";
  // declare a function
  function greeting() {
    return "Good Evening!"
  }
  return (
    <div>
      <h1 style={{textalign: "center", color:"orange"}}>Welcome to React JS {fullName}</h1>
      <p>Let's be famillar with JSX elements</p>
      <figure className='introimg'>
        <img src={forest}/>
      </figure>
      {/* card */}
      <section className="cardcontainer">
        <User image={batman_avatar} name='Batman' date='07/12/24' comments="I'm Batman...."/>
        <User image={businessman_avatar} name='Peter' date='07/12/24' comments="Having the best day ever!"/>
        <User image={oldwoman_avatar} name='Jessica' date='07/12/24' comments="Those kids on my lawn!"/>
      </section>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
