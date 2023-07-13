import React from 'react'
import Navbar from './Navbar'
import Card from './Card'
import Footer from './Footer'
import Carousel from './Carousel'

export default function Home() {
  return (
    <div>
      <Navbar />

      {/* ---------------Carousel------------------- */}
      <Carousel/>

      {/* --------------Cards---------------- */}
      <div className=' d-flex '>
        <Card/>
        <Card/>
        <Card/>
      </div>

    <Footer/>
    </div>
  )
}
