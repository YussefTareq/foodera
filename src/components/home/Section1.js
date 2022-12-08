import React from 'react'
import { Container } from 'react-bootstrap'
import "./Section1.css"
const Section1 = () => {
  return (
    <section id='sec1'>
      <Container>
      <div className='row'>
      <div className='col-md-3'><h2>1287+</h2>
      <span>SAVINGS</span></div>
      <div className='col-md-3'><h2>5786+</h2>
      <span>PHOTOS</span></div>
      <div className='col-md-3'><h2>1440+</h2>
      <span>ROCKETS</span></div>
      <div className='col-md-3'><h2>7110+</h2>
      <span id='sec2'>GLOBES</span></div>
      </div>
      </Container>
    </section>
  )
}

export default Section1
