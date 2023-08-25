import React from "react"
import "./herosection.css"

const HeroSection = props => {
  return <div className="hero-section-container section-padding">{props.children}</div>
}

export default HeroSection
