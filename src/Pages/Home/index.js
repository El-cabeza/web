import React from 'react'
import avatarImg from '../../img/avatar.jpg'
import { useNavigate } from "react-router-dom";
//CSS
import './style.css';


const HomePage = () => {
  const navigate = useNavigate();
  const navHome = () => {
    navigate("/home")
  }

  return (
    <div className='body'>
      <header className='header'>
        <p className='header-text' onClick={navigate}>Home</p>
        <p className='header-text' onClick={navigate}>Ingredientes</p>
        <p className='header-text' onClick={navigate}>Calculadora</p>

        <img src={avatarImg} className="avatarImg" alt="" />
      </header>
      <main>

      </main>

    </div>
  )
}

export default HomePage