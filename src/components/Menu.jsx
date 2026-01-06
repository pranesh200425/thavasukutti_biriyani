import React from 'react'
import FoodCard from './MicroComponents/FoodCard'

const Menu = () => {
  return (
    <div className='grid-cols-3 w-full' >
        <FoodCard />
    </div>
  )
}

export default Menu