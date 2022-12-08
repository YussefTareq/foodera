import React from 'react'
import "./Subscribe.css"
const Subscribe = () => {
  return (
    <div className='subscribe'>
      <div className='container'>
      <div className='row'><h2>Hurry up! Subscribe our newsletter<br/>
      and get 25% Off</h2></div>
      <div className='row'>
      <p>Limited time offer for this month. No credit card required.</p>
      <div className='col-md-6 col-lg-6'>
      <input type='text' placeholder="Email Address here" />
      </div>
      <div className='col-md-6 col-lg-6'>
      <button><a href='#'>Subscribe</a></button>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Subscribe
