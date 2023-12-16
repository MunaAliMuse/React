import { useState } from "react";
import images from "./assets/on.jpg"
import image from "./assets/off.jpg"





function Lmages() {
  
  const [bgColor, setBgColor] = useState("");
  const [textColor, setTextColor] = useState();
const btnON=()=>{
  setBgColor(true);
  setTextColor(true)
}
const btnOFF=()=>{
  setBgColor(false);
  setTextColor(false)
} 
  return <div className="rounded-xl p-4 m-8">
      <div style={{backgroundColor:bgColor}} className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] sm:ml-[500px] rounded-full ">
        <img style={{ display:bgColor == true ? "block" : " " }} className="w-[200px] hidden " src={images} />
        <img style={{ display:bgColor == false ? "block" : " " }}  className="w-[200px]   hidden"
        src={image} />
      </div>



      <div className="text-center sm:mt-32 mt-10">
        <button style={{ color: textColor == true ? "red" : ""}} onClick={btnON} className="border-2 p-6 text-4xl border-red-500">ON</button>
        <button  style={{ color: textColor == false ? "red" : ""}} onClick={btnOFF} className="border-2 p-6 text-4xl  border-red-500">OFF</button>
      </div>
    </div>
  
}

export default Lmages;
