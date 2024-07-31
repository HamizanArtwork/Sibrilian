import React from 'react'
import Header from './components/header'
import Kenalan from './components/kenalan'
import Video from './components/video'
import Tim from './components/tim'
import Faq from './components/faq'

const Home = () => {
  return (
    <div>
      <Header/>
      <Kenalan/>
      <Video/>
      <Tim/>
      <Faq/>
    </div>
  )
}

export default Home;
