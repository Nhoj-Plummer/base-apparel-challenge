import React from "react"
import HeroSection from "../HeroSection/herosection"
import "./herodata.css"

const Herodata = () => {
  return (
    <HeroSection>
      <div className="hero-data_text-container">
        <div className="hero-data_text-image"></div>
        <h1>We're Coming Soon</h1>
        <p></p>
        <form></form>
      </div>
      <div className="hero-data_image-container"></div>
    </HeroSection>
  )
}

export default Herodata
