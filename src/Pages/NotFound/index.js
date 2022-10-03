import React from 'react'

import pageNotFound from '../../img/error.png'

import './style.css'

const notFound = () => {
  return (
    <div >
      <img className='body' src={pageNotFound} alt="" />
    </div >
  )
}

export default notFound