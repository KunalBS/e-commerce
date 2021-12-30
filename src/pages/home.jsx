import React from 'react'
import Announcements from '../component/Announcements';
import Navbar from '../component/Navbar';
import Slider from '../component/Slider';

const Home = () => {
  return (
    <div>
      <Announcements/>  
      <Navbar/>
      <Slider/>
    </div>
  )
}

export default Home;
