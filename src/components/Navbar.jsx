import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Navbar=() =>{
  return (
    <nav className='flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0  '>
            <a href="/" aria-label='Home'>
            <h1  className='mx-2 font-bold'  width={50} height={33} >Shahbaz Dev</h1>
            </a>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href="https://www.linkedin.com/in/shahbaz-hashmi-561b932aa"
            target='blank'
            rel='noopeener norerferror'
            aria-label='LinkedIn'>
                <FaLinkedin/>
            </a>

             <a href="https://www.instagram.com/shahbazhashmi235/"
            target='blank'
            rel='noopeener norerferror'
            aria-label='Instagram'>
                <FaInstagram/>
            </a>

             <a href="https://github.com/Shahbazh1"
            target='blank'
            rel='noopeener norerferror'
            aria-label='Github'>
                <FaGithub/>
            </a>

             <a href="https://www.twitter.com/in/your-twitter-profile"
            target='blank'
            rel='noopeener norerferror'
            aria-label='Twitter'>
                <FaTwitter/>
            </a>
        </div>
    </nav>
  )
}

export default Navbar