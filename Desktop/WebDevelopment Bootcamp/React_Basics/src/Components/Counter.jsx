import React, { useState } from "react";

function Counter() {
    const [counter, setCounter] = useState(0)
    

 function  addNumber (){
        setCounter(counter + 1);
    }

 function  removeNumber (){
        setCounter(counter - 1);
    }

    function resetCounter(){
        setCounter(0)
    }
  return (
    <>
      <div className="m-5 flex flex-col items-center justify-center">
        <h2 className="text-2xl text-sky-500">Increment & Decrement</h2>
        <div className=" flex flex-row items-center justify-center m-3 bg-white text-black select-none">
            <div className="bg-white hover:cursor-pointer  text-3xl font-bold px-3  py-2" onClick={removeNumber}>-</div>
            <div className="px-8  border-gray-400 border-x-2  h-8 flex text-center items-center font-bold text-2xl">{counter}</div>
            <div className="bg-white hover:cursor-pointer font-bold text-2xl px-3 py-2" onClick={addNumber}>+</div>
        </div>
        <button  onClick={resetCounter} className="bg-sky-500">Reset</button>
      </div>
    </>
  );
}

export default Counter;
