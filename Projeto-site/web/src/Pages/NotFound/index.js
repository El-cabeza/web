import React from 'react'

import pageNotFound from '../../img/error.png'

import './style.css'

const notFound = () => {
  return (
    <div className='container'>
      <img className='body' src={pageNotFound} alt="" />
      <h1 className='text'>PAGE NOT FOUND</h1>
    </div >
  )
}

export default notFound