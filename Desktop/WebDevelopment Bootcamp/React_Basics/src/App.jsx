import { useState, useEffect } from "react";
import "./App.css";
import PrintData from "./Components/PrintData";
import Counter from "./Components/Counter";
import TourPage from "./Components/TourSiteComponents/TourPage";
import Navbar from "./Components/Top-Course-Starter/CourseComponents/Navbar";
import Filter from "./Components/Top-Course-Starter/CourseComponents/Filter";
import Cards from "./Components/Top-Course-Starter/CourseComponents/Cards";
import Spinner from "./Components/Top-Course-Starter/CourseComponents/Spinner";

function App() {
  // const [tours, setTours] = useState(data)
  // const [inputTital, setInputTital] = useState();
  // const [inputDate, setInputDate] = useState();

  // function inputDataEventHandler(event) {
  //   setInputTital(event.target.value);
  //   return currentTital;
  // }

  // console.log(currentTital);

  // function dateEventHandler(event) {
  //   setInputDate(event.target.value);
  //   // return currentDate;
  // }

  // function submitHandler(event) {
  //   event.preventDefault();

  //   const formData = {
  //     tital: inputTital,
  //     date: inputDate,
  //   };

  //   console.log(formData);

  //   setInputTital("");
  //   setInputDate("");
  // }

  // function printData(data) {
  //   console.log(data);
  // }

  const [courseData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(true);

  // console.log(courseData);

  const fetchData = async () => {
    // loading(true);
    try {
      const response = await fetch(
        "https://codehelp-apis.vercel.app/api/get-top-courses"
      );
      const result = await response.json();
      setCourseData(result.data);
    } catch (error) {
      error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  // fetchData();
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {/* <div className="container">
        <PrintData liftData={printData} />
        <form action="" onSubmit={submitHandler} >
          <input
            onChange={inputDataEventHandler}
            value={inputTital}
            type="text"
          />
          <input onChange={dateEventHandler} value={inputDate} type="date" />
          <button>Submit</button>
        </form>
      </div>
      <Counter/> */}

      {/* <div className="app flex justify-center  items-center  bg-white text-black ">
        <TourPage  />
      </div> */}
      <div className="app flex flex-col justify-center  items-center  bg-sky-950 text-black">
        <Navbar />
        <Filter />
      </div>
      <div className="flex justify-center border-red-500 border-2">{loading ? <Spinner /> : <Cards courseData={courseData} />}</div>
    </>
  );
}

export default App;
