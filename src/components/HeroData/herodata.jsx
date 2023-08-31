import React from "react"
import HeroSection from "../HeroSection/herosection"
import "./herodata.css"
import Logo from "../../assets/logo.svg"
import SubButton from "../../assets/icon-arrow.svg"
import Error from "../../assets/icon-error.svg"

const Herodata = () => {
  return (
    <HeroSection>
      <div className="hero-data_text-image">
        <img src={Logo} alt="logo" />
        <h1>1</h1>{" "}
      </div>
      <div className="hero-data_text-container">
        <h1 className="hero-data-text-header">
          <span>WE'RE</span> COMING SOON
        </h1>
        <p className="hero-data-text-description">Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</p>
        <form>
          <div className="hero-data-text-form">
            <input type="email" name="email" placeholder="Email Address" required />
            <label for="email">
              <img src={Error} alt="error" />
            </label>
            <button type="submit">
              <img src={SubButton} alt="button" />
            </button>
          </div>
          <p>Please provide a valid email</p>
        </form>
      </div>
      <div className="hero-data_image-container">
        <h1>3</h1>
      </div>
    </HeroSection>
  )
}

export default Herodata
