import React, { useState } from 'react';

const Tusbiih = () => {
  const [startValue, setStartValue] = useState(0);

  const handleIncrement = () => {
    setStartValue(startValue + 1);
  };

  const handleDecrement = () => {
    if (startValue > 0) {
      setStartValue(startValue - 1);
    }
  };

  const handleReset = () => {
    setStartValue(0);
  };

  return (
    <div className='justify-center bg-blue-700 h-[300px] w-[300px] ml-[30em] mt-[4em] rounded-xl text-center text-white'> 
      <h1 className="bg-gray-600 text-bold " style={{ color: startValue === 10 ? 'red' : 'black' }}>
        {startValue}
      </h1>
      <button className="bg-green-700 p-3 rounded-full mt-10 " onClick={handleIncrement}>
        Increment
      </button>

      <button className="bg-red-700 p-3 rounded-full mt-10" onClick={handleReset}>
        Reset
      </button>
      <button className="bg-green-700 p-3 rounded-full mt-10 " onClick={handleDecrement}>
        Decrement
      </button>
      
    </div>
  );
};

export default Tusbiih;
