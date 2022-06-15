import React from 'react'
import './footer.css'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'

function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">NF</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://instagram.com"><AiFillInstagram/></a>
        <a href="https://twitter.com"><BsTwitter/></a>
        <a href="https://facebook.com"><AiFillFacebook/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; NICOLO FABRIS, All Rights Reserved</small>
      </div>
    </footer>
  )
}

export default Footer