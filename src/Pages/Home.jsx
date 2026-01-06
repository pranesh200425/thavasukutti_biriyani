import React from 'react'
import Nav from '../components/Nav'
import Header from '../components/Header'
import Carosal from '../components/Carosal'
import Menu from '../components/Menu'

const Home = () => {
  return (
    <>
    <div className='flex flex-col w-full' >
        <Nav />
        <Header />
        <Carosal />
        <Menu />
    </div>
    
    </>
  )
}

export default Home