import React from 'react'
import Nav from '../components/Nav'
import Header from '../components/Header'
import Carosal from '../components/Carosal'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
    <div className='flex flex-col w-full' >
        <Nav />
        <Header />
        <Carosal />
        <Menu />
        <Footer />
    </div>
    
    </>
  )
}

export default Home