import { useEffect, useState } from "react";
import { dungeonData } from "./roomData.js";
// floor = yuka wall = kabe enemy = teki

export default Adventure = () => {
  useEffect(() => {
    //console.log("kiiro");
    //document.getElementById("effectDiv").append(<p>floor</p>);
    positionChar();
  }, []);
  useEffect(() => {
    positionMob();
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
    document.getElementById(y + "-" + x).innerHTML = "人";
  };
  const positionMob = (mobArray = [{ x: 3, y: 5 }]) => {
    //const positionMob = (x = 3, y = 5) => {
    document
      .getElementById(mobArray[0].x + "-" + mobArray[0].y)
      .append(`(<label id="aka">敵</label>)`);
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
