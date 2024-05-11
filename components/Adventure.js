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
  const test = () => {
    console.log("test");
  };
  return (
    <>
      <h3>Adventure Home</h3>
      <div>
        <table>
          <tr>
          {drawRow(dungeonData["width"], "#", "#")}
          </tr>
          {[...Array(dungeonData["length"])].map(() => {
            return <tr>{drawRow(dungeonData["width"], "#", "+")}</tr>;
          })}
          <tr>
          {drawRow(dungeonData["width"], "#", "#")}
          </tr>
        </table>
        <button onClick={test}>test</button>
      </div>
    </>
  );
};
