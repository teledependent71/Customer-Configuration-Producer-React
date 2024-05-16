import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Customer Configuration Producer</title>
        <meta property="og:title" content="Customer Configuration Producer" />
      </Helmet>
    </div>
  )
}

export default Home
