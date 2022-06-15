import React from 'react'
import CV from '../../assets/Screenshot 2022-06-02 at 15.38.10.png'


const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className="btn">Download CV</a>
        <a href="#contact" className="btn btn-primary">Let's Talk</a>
    </div>
  )
}

export default CTA