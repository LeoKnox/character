import { useEffect, useState } from "react";
import { dungeonData } from "./roomData.js";

export default Adventure = () => {
  useEffect(() => {
    console.log("kiiro");
    document.getElementById("effectDiv").append(<p>floor</p>);
  }, []);
  const newRoom = [
    ["+", "+", "+", "+", "+", "+", "+"],
    ["+", ".", ".", ".", ".", ".", "+"],
    ["+", ".", ".", ".", ".", ".", "+"],
    ["+", ".", ".", ".", ".", ".", "+"],
    ["+", ".", ".", ".", ".", ".", "+"],
    ["+", ".", ".", ".", ".", ".", "+"],
    ["+", "+", "+", "+", "+", "+", "+"],
  ];
  const roomState = useState(
    newRoom.map((x, ix) => (
      <tr>
        {x.map((y, iy) => (
          <td id={iy + "x" + ix}>{y}</td>
        ))}
      </tr>
    ))
  );

  const test = () => {
    console.log("test");
  };
  return (
    <>
      <h3>Adventure Home</h3>
      <div id="advDiv">
        <button onClick={test}>test</button>
        {roomState}
      </div>
      <div id="effectDiv"></div>
    </>
  );
};
