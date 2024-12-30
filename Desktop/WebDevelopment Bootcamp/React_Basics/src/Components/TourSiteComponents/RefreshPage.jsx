import React from "react";

function RefreshPage(tours) {
    console.log(tours);
    
  const refresh = (tours) => {
    if (tours.length === 0) {
      return (
        <>
          <div className="flex flex-col gap-5 justify-center items-center w-[100vw] h-[100vh] overflow-hidden ">
            <h2 className="font-bold text-3xl">No Tour Left</h2>
            <button
              className="bg-gray-300 w-32 py-2 px-6 mx-3 rounded font-bold border-gray-400 border-2 shadow-gray-400 shadow-lg"
              onClick={() => setTours(data)}
            >
              Refresh
            </button>
          </div>
        </>
      );
    }
  };
  return <div>
    <h1>Refresh Page</h1>
    {refresh}
  </div>;
}

export default RefreshPage;
