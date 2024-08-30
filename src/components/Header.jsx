import React from 'react'
import {HeaderImage} from '../constants/index'

const Header = () => {
  return (
    <div className='header'>
        <img src={HeaderImage} className='header-img' width={380} height={200} alt=""/>
    </div>
  )
}

export default Header