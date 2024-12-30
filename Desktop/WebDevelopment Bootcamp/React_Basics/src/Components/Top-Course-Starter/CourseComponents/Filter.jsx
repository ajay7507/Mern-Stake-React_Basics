import React, { useState } from "react";
import data from "./Data";

function Filter() {
  const [courseName, setCourseName] = useState(data);
  
  
  return (
    <div className="flex justify-center gap-10 bg-sky-950 ">
      {courseName.map(({id, title}) => {
        return <button key={id} className={`${id} bg-black text-white py-2 px-5 my-2 rounded-lg`} >{title}</button>;
      })}
    </div>
  );
}

export default Filter;
