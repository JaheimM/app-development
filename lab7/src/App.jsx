import React, { useState } from 'react'

function App() {
  // set the state - example 1
  const [count, setCount] = useState(0)

  // set the state - example 2
  const [counter, setCounter] = useState(1)

  const messages = ["I think, therefore I am", "I have a dream", 
    "The only thing we have to fear is fear itself"]

  // set the state - example 3
  const [isOpen, setIsOpen] = useState(false)

  //set the state to collect name - example 4
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
    alert(`Name: ${inputData.fullname} \nAge: ${inputData.age}`)
  }


  return (
    <>
      <h2 className="title">Example 1</h2>
      <p>The count is = {count}</p>
      <button className="incrementbtn" onClick={() => {setCount(count + 1)}}>
        Increment
      </button>
      <h1 className='title'>Example 2: slice app</h1>
      <section className="slicecontainer">
        <div className="slicewrapper">
          <div className={counter==1 ? "active": ""}>1</div>
          <div className={counter==2 ? "active": ""}>2</div>
          <div className={counter==3 ? "active": ""}>3</div>
        </div>
        <p className="displaymsg">"{messages[counter-1]}"</p>
        <div className="groupbtn">
          <button className='prev_btn' onClick={() => {if (counter > 1) setCounter(counter - 1)}}>Previous</button>
          <button className='next_btn' onClick={() => {if (counter < 3) setCounter(counter + 1)}}>Next</button>
        </div>
      </section>

      <h1 className="title">Example 3: open and close button</h1>
      <section className="intro"><b>Cat (Felis Catus)</b>, commonly referred to as the domestic cat or house cat
      <button onClick={() => {setIsOpen(!isOpen)}}> {isOpen ? "Hide" : "Read More"} </button>
      </section>
      <section>
        { isOpen &&
          (
            <div className="readmore">
              The cat (felis catus), commonly referred to as the domestic cat or house cat. A small domesticated 
              carnivorous mammal. It is the only domesticated species of the family felidae. Recent advances in arhaeology 
              and genetics have shown that the domestication of the cat occurred in the Near East around 7500 BC
            </div>
          )
        }
      </section>

      <h1 className="title">Example 4: forms</h1>
      <section>
        <form className="signupform" onSubmit={submitform}>
          <fieldset>
            <legend>Sign up form</legend>
            <div className="formcontrol">
              <label htmlFor="name">Enter name: </label>
              <input
                id="name"
                type="text"
                placeholder='Type your name...'
                name="fullname"
                value={inputData.fullname}
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
                <label htmlFor="gender">Enter age: </label>
                <select  
                id="gender"
                placeholder="Male" 
                name="gender"
                value={inputData.gender}
                >
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="other">Other</option>
                  <option value="n/a">Prefer not to say</option>
                </select>
              </div>
              <div><button type="submit">Submit</button></div>
          </fieldset>
        </form>
      </section>
    </>
  )
}

export default App
