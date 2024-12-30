import React from "react";

function PrintData(props) {

  const userData = {
    name: "Ajay",
    age: "24",
    qualification: "B.Tech",
  };

  props.liftData(userData)

  return (
    <div>
      <h1>Hello React</h1>
    </div>
  );
}

export default PrintData;
