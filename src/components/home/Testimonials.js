import React from 'react'
import { Carousel } from 'react-bootstrap'
import "./Testimonials.css"
import img1 from "../../assets/1.jpg"
import img2 from "../../assets/2.jpg"

const Testimonials = () => {
  return (
    <div className='Testimonials' id='test'>
    <div className='container'>
    <div className='row'>
    <div className='col-lg-12 col-md-12'>
    <h2>Testimonials</h2>
    <Carousel className='car'>
    <Carousel.Item>
      <img
        src={img1}
        alt=""
      />
      <Carousel.Caption>
        <h3>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live."</h3>
        <p>Simab Dave - Web Designer</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        src={img2}
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live."</h3>
        <p>Johnthan Doe - UX Designer</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Testimonials;
