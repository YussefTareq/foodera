import React from 'react'
import "./Header.css"
const Header = () => {
    return (
        <header id='home'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h2>Good food choices are good investments.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.</p>
                        <button>Order Now<a href='/#'><i class="fa-solid cart fa-cart-shopping"></i></a></button>
                        <button>Learn More<a href='/#'><i class="fa-solid arr fa-chevron-right"></i></a></button>
                    </div>
                    <div className='col-md-6'></div>
                </div>
            </div>
        </header>
    )
}

export default Header
