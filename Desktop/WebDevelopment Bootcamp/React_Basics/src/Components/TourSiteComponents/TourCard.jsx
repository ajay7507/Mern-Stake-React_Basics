import React, { useState } from "react";

function TourCard({
  id,
  cityName,
  image,
  info,
  price,
  removeCardHandler,
  tours
}) {
  const [readmore, setReadmore] = useState(false);
  const [refreshPage, setRefreshPage] = useState()

  const description = readmore ? info : `${info.substring(0, 150)}....`;
  // console.log(readmore);

  const readMoreText = readmore ? "Less More" : "Read More";

  function readMoreHandler() {
    setReadmore(!readmore);
  }

  return (
    <>
      <div>
        {/* {refreshPage} */}
        <div className="flex flex-col items-center justify-center flex-wrap gap-3 box-border max-w-[400px] my-6 border-gray-200 border-2 rounded-lg p-3 font-sans shadow-red-500 md:shadow-xl">
          <img
            className="w-[398px] aspect-[1/1] object-cover "
            src={image}
            alt=""
          />
          <div className="card-details ">
            <p className="price text-green-600 text-[20px] font-bold">
              ₹ {price}
            </p>
            <p className="cityName font-bold text-2xl">{cityName}</p>
            <p className="description">
              {description}{" "}
              <span
                className="cursor-pointer text-sky-400"
                onClick={readMoreHandler}
              >
                {readMoreText}
              </span>
            </p>
          </div>

          <button
            className="bg-red-100 w-60 py-2 rounded-lg  border-x-green-700 border-x-2 border-y-red-700 border-y-2 border-opacity-60 text-[15px] font-bold font-sans"
            onClick={() => removeCardHandler(id)}
          >
            Not Interested
          </button>
        </div>
      </div>
    </>
  );
}

export default TourCard;
