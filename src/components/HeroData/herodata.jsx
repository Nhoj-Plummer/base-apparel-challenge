import React, { useState } from "react"
import HeroSection from "../HeroSection/herosection"
import "./herodata.css"
import Logo from "../../assets/logo.svg"
import SubButton from "../../assets/icon-arrow.svg"
import Error from "../../assets/icon-error.svg"

const Herodata = () => {
  const [email, setEmail] = useState("")
  // const [error, setError] = useState("")

  const handleChange = e => {
    setEmail(e.target.value)
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    
     if (reg.test(email) === false) {
      console.log("Email is Not Correct");
     }
    // console.log(email)
  }

  return (
    <HeroSection>
      <div className="hero-data_text-image">
        <img src={Logo} alt="logo" />
      </div>
      <div className="hero-data_text-container">
        <h1 className="hero-data-text-header">
          <span>WE'RE</span> COMING SOON
        </h1>
        <p className="hero-data-text-description">Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</p>
        <form>
          <div className="hero-data-text-form">
            <input type="email" value={email} name="email" placeholder="Email Address" onChange={handleChange} required />
            <img src={Error} alt="error" className="hero-data-text-form_error-logo" />
            <button type="submit">
              <img src={SubButton} alt="button" />
            </button>
          </div>
          {/* {email ? <p className="hero-data-text-form_error">Please provide a valid email</p> : <p></p>} */}
        </form>
      </div>
      <div className="hero-data_image-container"></div>
    </HeroSection>
  )
}

export default Herodata
