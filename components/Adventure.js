import { useEffect, useState } from "react";
import { dungeonData } from "./roomData.js";
// floor = yuka wall = kabe enemy = teki

export default Adventure = () => {
  const [hito, setHito] = useState({ x: 1, y: 1 });
  useEffect(() => {
    //console.log("kiiro");
    //document.getElementById("effectDiv").append(<p>floor</p>);
    positionChar(hito);
  }, [hito]);
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
  const positionChar = ({ x, y }) => {
    document.getElementById(y + "-" + x).innerHTML = "人";
  };
  const takeTurn = () => {
    setHito({ x: hito.x + 1, y: hito.y });
    //alert(`hito: ${hito.x} : ${hito.y}`);
  };
  const positionMob = (mobArray = [{ x: 3, y: 5 }]) => {
    //const positionMob = (x = 3, y = 5) => {
    let temp = <label id="aka">敵</label>;
    document.getElementById(
      mobArray[0].x + "-" + mobArray[0].y
    ).innerHTML += `<label id="aka">敵</label>`;
    /* document.getElementById(
      mobArray[0].x + "-" + mobArray[0].y
    ).innerHTML = `<label id="aka">敵</label>`;*/
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
      <div id="effectDiv">
        <p>
          <button>上</button>
        </p>
        <p>
          <button>左</button>
          <button>右</button>
        </p>
        <p>
          <button onClick={() => takeTurn()}>下</button>
        </p>
      </div>
    </>
  );
};
