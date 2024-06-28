import { createContext, useState } from "react";
import runChat from "../config/swishh";

export const Context = createContext();
const ContextProvider = (props) =>{
    const [input , setInput] = useState("")
    const [recentPrompt ,setRecentPrompt]=useState("")
    const [prevPrompt,setPrevPrompt ]= useState([])
    const [showResult,setShowResult] =useState(false)
    const [loading,setLoading] =useState(false)
    const [resultData ,setResultData] =useState("")
    const onSent = async(prompt)=>{
        setResultData ("")
        setLoading(true)
        setShowResult(true)
        const response =  await runChat(input)
        console.log(response)
        setResultData(response)
        setLoading(false)
        setInput("")
    }
    const contextvalue ={
      prevPrompt,
      recentPrompt,
      setPrevPrompt,
      onSent,
      setRecentPrompt,
      showResult,
      loading,
      resultData,
      input,
      setInput
    }

    return(
       <Context.Provider value={contextvalue}>
        {props.children}
       </Context.Provider>
    )
}
export default ContextProvider

