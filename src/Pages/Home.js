import React from 'react'
import Sidebar from "../Comp/Sidebar"
import Chat from "../Comp/Chat.js"

const Home = () => {
  return (
    <div className='home'>
      <div className="container">
      <Sidebar/>
      <Chat/>
      </div>
      
    </div>
  )
}

export default Home
