import React, { useState, useEffect } from "react";
import { GiHearts } from "react-icons/gi";

function Card(props) {
  const courseData = props.courseDetails;

  function onColorChange() {}
  return (
    <>
      <div className="flex flex-col items-center flex-wrap gap-3 box-border max-w-[400px] my-6 border-gray-200 border-2 rounded-lg p-3 font-sans shadow-red-500 md:shadow-xl ">
        <div className=" flex flex-col">
          <img
            className="flex flex-col flex-wrap box-border rounded-lg"
            src={courseData.image.url}
            alt=""
          />
          <GiHearts
            className="size-7 fill-white self-end mt-[-5vh] mr-1 hover:cursor-pointer"
            onClick={onColorChange}
          />
        </div>
        <div>
          <p className="font-bold my-3">{courseData.title}</p>
          <p>{courseData.description} </p>
        </div>
      </div>
    </>
  );
}

export default Card;
