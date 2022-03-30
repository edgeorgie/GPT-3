import React from 'react'

import { Brand, CTA, Navbar } from './components'
import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers'

import './Main.scss'

export const App = () => {
  return (
    <div className="App">
      <div className="gradiant__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}
