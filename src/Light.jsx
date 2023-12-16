import { useState } from "react";

function lmages(){

    
    const [color, setColor] =useState("")
        
    const[text, setTextColor]= useState()




const updateColor =()=>{
    setColor("yellow")
    setTextColor(true)
}
const resetColor =()=>{
    setColor("transparent")
    setTextColor(false)

}

    return <div className="rounded-xl p-4 m-10">
        <div style={{background: color}} className=" sm:w-[400px] h-[400px] ml-[500pX] border-2 border-black rounded-full">

        </div>
         <div className="justify-center flex mt-5 gap-5">
        <button style={{color: text == true ? "red" : ""}} onClick={updateColor }  className="border-2 border-green-400 py-4 px-4 ">On</button>
    <button style={{color: text == false ? "red" : ""}} onClick={resetColor} className="border-2 border-green-400 py-4 px-4 ">Off</button>
    </div>

    </div>
}

export default lmages