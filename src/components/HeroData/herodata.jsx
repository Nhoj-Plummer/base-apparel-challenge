import React, { useState } from "react"
import HeroSection from "../HeroSection/herosection"
import "./herodata.css"
import Logo from "../../assets/logo.svg"
import SubButton from "../../assets/icon-arrow.svg"
import Error from "../../assets/icon-error.svg"

const Herodata = () => {
  const [email, setEmail] = useState("")
  const [error, setError] = useState(null)

  function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email)
  }

  const handleChange = e => {
    /*Conditnional Formations */

    // Not Filled COmpletely or no correctly made
    if (!validateEmail(e.target.value)) {
      setError(true)
    }
    // Empty Field
    if (e.target.value === "") {
      setError(false)
    }

    // Filled Field
    if (validateEmail(e.target.value)) {
      setError(false)
    }
    setEmail(e.target.value)
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
            {error ? <img src={Error} alt="error" className="hero-data-text-form_error-logo" /> : <img alt="" />}
            <button type="submit">
              <img src={SubButton} alt="button" />
            </button>
          </div>
          {error ? <p className="hero-data-text-form_error">Please provide a valid email</p> : <p></p>}
        </form>
      </div>
      <div className="hero-data_image-container"></div>
    </HeroSection>
  )
}

export default Herodata
