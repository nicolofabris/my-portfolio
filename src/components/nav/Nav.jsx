import React from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {FiUser} from 'react-icons/fi'
import {BiBook} from 'react-icons/bi'
import {TbMessage} from 'react-icons/tb'
import {RiServiceLine} from 'react-icons/ri'
import {useState} from 'react'

function Nav() {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""} ><AiFillHome/></a>
      <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ''}><FiUser/></a>
      <a href="#experience" onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ''}><BiBook/></a>
      <a href="#services" onClick={() => setActiveNav("#services")} className={activeNav === "#services" ? "active" : ''}><RiServiceLine/></a>
      <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ''}><TbMessage/></a>
    </nav>
  )
}

export default Nav