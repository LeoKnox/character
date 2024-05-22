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
    newRoom.map((y, iy) => (
      <tr>
        {y.map((x, ix) => (
          <td id={iy + "-" + ix}>{x}</td>
        ))}
      </tr>
    ))
  );
  const positionChar = ({ x, y }) => {
    document.getElementById(
      y + "-" + x
    ).innerHTML = `<label id="hito">人</label>`;
  };
  const takeTurn = (e) => {
    let tileTemp = hito;
    //console.log(e.target.name);
    console.log(document.getElementById(hito.y + 1 + "-" + hito.x).innerHTML);
    //e.target.name === "down" ? setHito({ x: hito.x + 1, y: hito.y }) : null;
    if (e.target.name === "down") {
      alert(document.getElementById(hito.x + 1 + "-" + hito.y).innerHTML);
      if (
        document
          .getElementById(hito.x + 1 + "-" + hito.y)
          .innerHTML.includes("敵")
      ) {
        alert("hit");
      } else {
        setHito({ x: hito.x, y: hito.y + 1 });
      }
    }
    e.target.name === "up" ? setHito({ x: hito.x, y: hito.y - 1 }) : null;
    e.target.name === "right" ? setHito({ x: hito.x + 1, y: hito.y }) : null;
    e.target.name === "left" ? setHito({ x: hito.x - 1, y: hito.y }) : null;
    document.getElementById(tileTemp.y + "-" + tileTemp.x).innerHTML =
      newRoom[tileTemp.x][tileTemp.y];
    //document.getElementById(tileTemp.y + "-" + tileTemp.x).innerHTML = `床`;
    //alert(`hito: ${hito.x} : ${hito.y}`);
  };
  const charAction = () => {
    console.log("char action");
  };
  const positionMob = (mobArray = [{ x: 3, y: 5 }]) => {
    //const positionMob = (x = 3, y = 5) => {
    let temp = <label id="aka">敵</label>;
    document.getElementById(
      mobArray[0].y + "-" + mobArray[0].x
    ).innerHTML = `<label id="aka">敵</label>`;
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
      <div id="effectDiv" onKeyDown={() => charAction()}>
        <p>
          <button name="up" onClick={(e) => takeTurn(e)}>
            上
          </button>
        </p>
        <p>
          <button name="left" onClick={(e) => takeTurn(e)}>
            左
          </button>
          <button name="right" onClick={(e) => takeTurn(e)}>
            右
          </button>
        </p>
        <p>
          <button name="down" onClick={(e) => takeTurn(e)}>
            下
          </button>
        </p>
      </div>
    </>
  );
};
