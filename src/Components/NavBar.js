import React from 'react'
import { useNavigate } from "react-router-dom";



import "./NavBar.css"
import avatarImg from '../img/avatar.jpg'

const NavBar = () => {

  const navigateReg = useNavigate();
  const navigateLog = useNavigate();
  const navigateNot = useNavigate();

  const navRegister = () => {
    navigateReg('/register')
  }
  const navLogin = () => {
    navigateLog('/')
  }
  const navNotFound = () => {
    navigateNot('/*')
  }

  return (
    <nav className='navBar'>
      <ul className='list'>
        <li className='item'>
          <p onClick={navNotFound}>Home</p>
        </li>
        <li className='item'>
          <p onClick={navRegister}>Ingredientes</p>
        </li>
        <li className='item'>
          <p onClick={navLogin}>Calculadora</p>
        </li>
      </ul>
      <img className='avatarImg' onClick={navNotFound} src={avatarImg} alt='foto do usuário' />

    </nav>

  )
}

export default NavBar