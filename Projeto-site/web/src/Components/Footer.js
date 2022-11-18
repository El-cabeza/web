import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'

import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <ul className='socialIcons'>
        <AiFillGithub className='icon'/>
        <AiFillLinkedin className='icon'/>
        <AiFillInstagram className='icon'/>
        <AiOutlineTwitter className='icon'/>
      </ul>
      <p className='textCompany'>
        <span>Price Calculator</span> &copy; 2022
      </p>
    </footer>
  )
}

export default Footer