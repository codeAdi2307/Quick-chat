import React from 'react'
import "../chat.css"
import Message from './Message'

const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Adi</span>
       <div className="chatIcon">
        <img src="https://img.icons8.com/?size=1x&id=NihBDEKtbUKK&format=png" alt="" />
        <img src="https://img.icons8.com/?size=1x&id=m3ZGMVwfwmA4&format=png" alt="" />
        <img src="https://img.icons8.com/?size=1x&id=3096&format=png" alt="" />
       </div>
      </div>
      <Message/>
      
    </div>
  )
}

export default Chat
