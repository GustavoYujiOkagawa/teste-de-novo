import React from 'react'
import {HeaderImage} from '../constants/index'

const Header = () => {
  return (
    <div className='header'>
        <img src={HeaderImage} className='header-img' width={420} height={250} alt=""/>
    </div>
  )
}

export default Header