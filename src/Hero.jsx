import { useState } from "react";

function Hero(){

    const [color, setColor] =useState("")
        
    



const updateColor =()=>{
    setColor("red")
}
const resetColor =()=>{
    setColor("black")
}
return <div className="w-[400px] rounded-xl p-4 m-10 bg-red-200 text-center justify-center" >
    <h1 style={{color: color}} className="text-4xl font-bold">this is Statr</h1>
    
    <button onClick={updateColor} className="border-2 border-green-400 p-5 text-4xl">Change color</button>
    <button onClick={resetColor} className="border-2 border-green-400 p-5 text-4xl">Setcolor</button>


</div>
}
export default Hero