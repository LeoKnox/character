import { dungeonData } from "./roomData.js";

export default Adventure = () => {
  const drawRow = (width, wall, floor) => {
    return (
      <>
        {wall}
        {[...Array(width)].map(() => (
          <td>{floor}</td>
        ))}
        {wall}
      </>
    );
  };
  const drawRoom = (x, y, wall, floor) => {
    console.log("draw room");
    return (
        <>
    for (let i = 0; i < x; i++) {
       <p id={"0" + i}>{wall}</p>;
    }</>)
  };
  const test = () => {
    console.log("test");
  };
  return (
    <>
      <h3>Adventure Home</h3>
      <div>
        <table>
          <tr>{drawRow(dungeonData["width"], "#", "#")}</tr>
          {[...Array(dungeonData["length"])].map(() => {
            return <tr>{drawRow(dungeonData["width"], "#", "+")}</tr>;
          })}
          <tr>{drawRow(dungeonData["width"], "#", "#")}</tr>
        </table>
        {drawRoom(5, 3, "#", "+")}
        <button onClick={test}>test</button>
      </div>
    </>
  );
};
