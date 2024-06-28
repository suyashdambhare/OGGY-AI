import React, { useState } from 'react'
import './Sidebar.css'
import {assets} from '../../assets/assets'

const Sidebar = () => {
    const[ext ,setExt] =useState(false)
  return (
    <div className='sidebar'>
      <div className="top">
        <img onClick={()=>setExt( prev=>!prev)} className='menu' src={assets.menu_icon} alt="" />
        <div className="new-chat">
            <img src={assets.plus_icon} alt="" />
           {ext? <p>New Chat</p>:null}
        </div>
       {ext? <div className="recent">
          <p className='recent-title'> Recent </p>
          <div className="recent-entry">
            <img src={assets.message_icon} alt="" />
         <p>What is react...</p>
          </div>
        </div>:null}

      </div>

      <div className="bottom">
        <div className="bottom-item recent-entry">
            <img src={assets.question_icon} alt="" />
           {ext?<p>Help</p>:null}
        </div>
        <div className="bottom-item recent-entry">
            <img src={assets.history_icon} alt="" />
            {ext?<p>Acitvity</p>:null}
        </div>
        <div className="bottom-item recent-entry">
            <img src={assets.setting_icon} alt="" />
            {ext?<p>Settings</p>:null}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
