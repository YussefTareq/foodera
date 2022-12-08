import React from 'react'
import Cards from './Cards'
import "./FoodsCards.css"
const Foods = () => {

  return (
    <div className='foods' id='food'>
    <div className='container'>
    <div className='row '>
    <div className='col-md-12 col-lg-12 '>
      <h2>Explore Our Foods</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet<br/>
       leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and<br/>
       Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
    </div>
    </div>
    <div className='row'>
    <Cards/>
    </div>
    </div>
    </div>
    
  )
}

export default Foods
