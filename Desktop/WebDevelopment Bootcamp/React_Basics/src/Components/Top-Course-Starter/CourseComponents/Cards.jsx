import React, { useEffect, useState } from "react";
// import {toast} from "react-toa"
import Card from "./Card";

function Cards(props) {
  const courseData = props.courseData;

  // const [courseData, setCourseData] = useState(null);
  // const [loading, setLoading] = useState(true);
  // console.log(`This is the data ${courseData}`);
  // console.log(courseData);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://codehelp-apis.vercel.app/api/get-top-courses"
  //       );
  //       const result = await response.json();
  //       setCourseData(result.data);
  //     } catch (error) {
  //       error("Error fetching data:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  // setTimeout(() => {
  const getAllCourse = () => {
    let allCourses = [];
    Object.values(courseData).forEach((courseCategory) => {
      courseCategory.forEach((course) => {
        allCourses.push(course);
      });
    });
    return allCourses;
  };
  return (
    <>
      <div className="flex justify-center gap-5  mt-10 flex-wrap w-[1300px] ">
        {getAllCourse().map((data) => {
          return <Card key={data.id} courseDetails={data} />;
        })}
      </div>
    </>
  );
}

export default Cards;
