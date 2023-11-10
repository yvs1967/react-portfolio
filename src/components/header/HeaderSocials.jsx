import React from 'react'
import './header.css'
import { BsLinkedin } from 'react-icons/bs'
import { AiFillYoutube } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com' target='_blank'><BsLinkedin /></a>
        <a href='https://youtube.com' target='_blank'><AiFillYoutube /></a>
        <a href='https://facebook.com' target='_blank'><BsFacebook /></a>
    </div>
  )
}

export default HeaderSocials