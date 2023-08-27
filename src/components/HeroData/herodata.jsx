import React from "react"
import HeroSection from "../HeroSection/herosection"
import "./herodata.css"
import Logo from "../../assets/logo.svg"

const Herodata = () => {
  return (
    <HeroSection>
      <div className="hero-data_text-image">
        <img src={Logo} alt="logo" />
      </div>
      <div className="hero-data_text-container">
        {/* <h1 className="hero-data-text-header">
          <span>We're</span> <span>Coming Soon</span>
        </h1>
        <p className="hero-data-text-description">Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</p> */}
        <form className="hero-data-text-form"></form>
      </div>
      <div className="hero-data_image-container"></div>
    </HeroSection>
  )
}

export default Herodata
