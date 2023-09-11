import React from 'react'
import Hero from './Hero';
import Popular from './Popular';
import CardItems from './CardItems';
import Header from '../Block/Header';
function HomePage() {
  return (
    <div>
      <Hero/>
      <Popular />
      <CardItems />
      {/* <Buttons /> */}
    </div>
  )
}

export default HomePage;
