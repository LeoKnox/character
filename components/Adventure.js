import { dungeonData } from "./roomData.js";

export default Adventure = () => {
  return (
    <>
      <h3>Adventure Home</h3>
      <div>
      {[...Array(10)].map((e, i) => {
    return <p key={i}>{i}</p>
  })}
      </div>
    </>
  );
};
