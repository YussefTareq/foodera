import React from 'react'
import img from "../../assets/2.png"
import "./Section3.css"
const Section3 = () => {
    return (
        <div className='hand'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 heigh'>
                        <h2>We make everything by hand with the best possible ingredients.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <ul>
                            <li>Etiam sed dolor ac diam volutpat.</li>
                            <li>Erat volutpat aliquet imperdiet.</li>
                            <li>purus a odio finibus bibendum.</li>
                        </ul>
                        <button>
                            <a href='#'>Learn More</a>
                        </button>
                    </div>
                    <div className='col-md-6'>
                        <img src={img}
                            title='img'
                            alt=''/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section3
