import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
      <div className='row'>
      <div className='col-md-12 col-lg-12'>
      <ul className='links'>
      <li><a href='/#'>Register</a></li>
      <li><a href='/#'>Forum</a></li>
      <li><a href='/#'>Affiliate</a></li>
      <li><a href='/#'>FAQ</a></li>
      </ul>
      </div>
      </div>
      <div className='row'>
      <div className='col-md-12 col-lg-12'>
      <ul className='social'>
      <li><a href='/#'><i class="fa-brands fa-facebook-f"></i></a></li>
      <li><a href='/#'><i class="fa-brands fa-twitter"></i></a></li>
      <li><a href='/#'><i class="fa-brands fa-youtube"></i></a></li>
      <li><a href='/#'><i class="fa-brands fa-dribbble"></i></a></li>
      <li><a href='/#'><i class="fa-brands fa-linkedin"></i></a></li>
      <li><a href='/#'><i class="fa-brands fa-instagram"></i></a></li>
      </ul>
      </div>
      </div>
      <div className='row'>
      <div className='col-md-12 col-lg-12'>
      <span> © 2021. Foodera. All rights reserved.</span>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Footer
