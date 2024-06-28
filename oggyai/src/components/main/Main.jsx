import React, { useContext, useEffect } from 'react'
import './main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {
    const {
        onSent ,recentPrompt , showResult ,loading ,resultData , setInput,input 

    } = useContext(Context)
    
  return (
   <div className="main">
    <div className="nav">
        <p>OGGY AI</p>
        <img src={assets.oggy} alt="" width={100} />
    </div>
    <div className="main-container">
        {!showResult
        ? <>
         <div className="greet">
            <p><span> HII , I'M OGGY .</span></p>
            <p>How can I help you today.</p>
        </div>
        <div className="cards">
            <div className="card">
                <p>More about REACT Js</p>
                <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card">
                <p>More about NEXT Js</p>
                <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="card">
                <p>More about NODE Js</p>
                <img src={assets.message_icon} alt="" />
            </div>
            <div className="card">
                <p>More about Angular Js</p>
                <img src={assets.code_icon} alt="" />
            </div>
            
        </div>
        
        </> :
        <div className="result">
            <div className="result-title">
                <img src={assets.oggy} alt="" />
                <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
                <img src={assets.gemini_icon} alt="" />
                {loading
                ? <div className="loader">
                    <hr /> <br />
                    <hr /> <br /> 
                    <hr />

                    </div> : <p dangerouslySetInnerHTML={{__html:resultData}} ></p>}
                
            </div>
        </div>
        
        }
       
       
        <div className="main-bottom">
            <div className="searchbox">
                <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" name=""placeholder='Enter Prompt Here' id="" />
            <div>
            <img src={assets.gallery_icon} alt="" />
            <img src={assets.mic_icon} alt="" />
            <img onClick={()=>onSent()} src={assets.send_icon} alt="" /></div>
            </div>
            <p className="bottom-info">
        OGGY may display some inaccurate information. Use it at your own risk.
    </p>
        </div>
    </div>
   
   </div>
  )
}

export default Main
