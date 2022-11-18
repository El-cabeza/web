import React from 'react'

import './BusinessCard.css'
import fireLogo from '../img/logo.png';



const BusinessCard = ({name, img}) => {

  return (
    <div className='cotainer'>
      <li className='itemBusiness'>
        <img className='imgBusiness' src={(img === "")? fireLogo : img } alt="" />
        <h3 className='titleBusiness'>{name}</h3>
        <button className='buttonBusiness'>Selecionar</button>
      </li>
    </div>
  )
}

export default BusinessCard