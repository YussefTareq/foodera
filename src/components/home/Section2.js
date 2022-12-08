import React from 'react'
import img from "../../assets/1.png"
import "./Section2.css"
const Section2 = () => {
  return (
    <div className='pride'>
    <div className='container'>
    <div className='row'>
    <div className='col-md-6'>
      <img src={img} title='img' alt=''/>
    </div>
    <div className='col-md-6 heigh'>
      <h2>We pride ourselves on making real food from the best ingredients.</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
      <button><a href='#'>Learn More</a></button>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Section2
