import { useEffect, useState } from "react";
import { dungeonData } from "./roomData.js";

export default Adventure = () => {
  useEffect(() => {
    console.log("kiiro");
    document.getElementById("effectDiv").append(<p>floor</p>);
    positionChar();
  }, []);
  const newRoom = [
    ["壁", "壁", "壁", "壁", "壁", "壁", "壁"],
    ["壁", "床", "床", "床", "床", "床", "壁"],
    ["壁", "床", "床", "床", "床", "床", "壁"],
    ["壁", "床", "床", "床", "床", "床", "壁"],
    ["壁", "床", "床", "床", "床", "床", "壁"],
    ["壁", "床", "床", "床", "床", "床", "壁"],
    ["壁", "壁", "壁", "壁", "壁", "壁", "壁"],
  ];
  const roomState = useState(
    newRoom.map((x, ix) => (
      <tr>
        {x.map((y, iy) => (
          <td id={iy + "-" + ix}>{y}</td>
        ))}
      </tr>
    ))
  );
  const positionChar = (x = 1, y = 1) => {
    document.getElementById(x + "-" + y).innerHTML = "人";
  };
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
