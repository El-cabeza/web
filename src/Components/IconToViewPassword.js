import React from 'react'
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";

const IconToViewPassword = ({visible, visibleSet}) => {

  

  return (

    <div onClick={visibleSet} className="positionEye">

    {(visible === true)
      ? <HiOutlineEye className="registerIcon" />
      : <HiOutlineEyeOff className="registerIcon" />
    }
  </div>
  )
}

export default IconToViewPassword