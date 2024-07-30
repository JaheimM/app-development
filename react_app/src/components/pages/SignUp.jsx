import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

function SignUp() {
    // collecting multiple input data as states
    const [inputData, setInputData] = useState({})

    // function to collect changes in each input data
    const handleData = (e) => {
      const name = e.target.name
      const value = e.target.value
      // spreading values use =>
      setInputData(values => ({...values, [name]:value})) //spread
    }
  
    // submit function
    const submitform = (e) => {
      e.preventDefault()
      // usually info is sent to database
      alert(`${inputData.username} \n An access code has been sent to your email address \n ${inputData.email}`)
    }
  
  
  return (
    <div className="main-wrapper">
    <section className='banner'>
       <h1>
        Sign Up to get early access to projects...
       </h1>
       <form className="signupform" onSubmit={submitform}>
          <fieldset>
            <legend>Sign up form</legend>
            <div className="formcontrol">
              <label htmlFor="username">Enter username: </label>
              <input
                id="username"
                type="text"
                placeholder='Type your username...'
                name="username"
                value={inputData.username}
                onChange={handleData}
                />
            </div>
            <div className="formcontrol">
              <label htmlFor="username">Enter password: </label>
              <input
                id="password"
                type="password"
                placeholder='Type your password...'
                name="password"
                value={inputData.password}
                onChange={handleData}
                />
            </div>
              <div className="formcontrol">
                <label htmlFor="age">Enter age: </label>
                <input  
                id="age"
                type="number" 
                placeholder="34" 
                name="age"
                min={1}
                max={99}
                value={inputData.age}
                onChange={handleData} />
              </div>
              <div className="formcontrol">
                <label htmlFor="gender">Enter gender: </label>
                <select  
                id="gender"
                placeholder="Male" 
                name="gender"
                value={inputData.gender}
                onChange={handleData}
                >
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="other">Other</option>
                  <option value="n/a">Prefer not to say</option>
                </select>
              </div>
              <div className="formcontrol">
              <label htmlFor="email">Enter Email: </label>
              <input
                id="email"
                type="email"
                placeholder='JohnDoe@emailprovider.com'
                name="email"
                value={inputData.email}
                onChange={handleData}
                />
            </div>
              <div>
                <button type="submit">Submit</button></div>
          </fieldset>
        </form>
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

export default SignUp