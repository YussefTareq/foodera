import React from 'react'
import Baked from './Baked'
import Foods from './Foods'
import Frequently from './Frequently'
import Header from './Header'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Subscribe from './Subscribe'
import Testimonials from './Testimonials'

const Home = () => {
    return (<div>
        <Header/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Foods/>
        <Testimonials/>
        <Frequently/>
        <Baked/>
        <Subscribe/>
    </div>)
}

export default Home
