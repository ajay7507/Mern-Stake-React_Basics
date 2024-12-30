import React, { useState } from "react";
import TourCard from "./TourCard";
import data from "./Data";

function TourPage() {
  const [tours, setTours] = useState(data);

  /* ......Tour cards remove function...... */
  function removeCardHandler(id) {
    let removeCards = tours.filter((tour) => tour.id !== id);
    setTours(removeCards);
  }

  /* .......Content after no tour available....... */
  let refreshPage;
  if (tours.length === 0) {
    refreshPage = (
      <div className="flex flex-col gap-5 justify-center items-center w-[100vw] h-[50vh] overflow-hidden ">
        <h2 className="font-bold text-3xl">No Tour Left</h2>
        <button
          className="bg-gray-300 w-32 py-2 px-6 mx-3 rounded font-bold border-gray-400 border-2 shadow-gray-400 shadow-lg"
          onClick={() => setTours(data)}
        >
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div className=" flex flex-col items-center  mt-10  h-auto ">
      <h2 className="w-96 text-4xl font-bold border-black border-4 border-dashed rounded-xl pt-2 pb-3 px-14 ">
        Plan With Love
      </h2>
      {refreshPage}
flex justify-center gap-5 flex-wrap w-[1300px] h-auto m-10
      <div className="cards ">
        {tours.map((tour) => {
          return (
            <TourCard
              {...tour}
              tours={tours}
              removeCardHandler={removeCardHandler}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TourPage;
