import { dungeonData } from "./roomData.js";

export default Adventure = () => {
  return (
    <>
      <h3>Adventure Home</h3>
      <div>
        {[...Array(dungeonData["width"])].map((e, i) => {
          return (
            <p key={i}>
              {[...Array(4)].map((e, j) => ("*"))}
            </p>
          );
        })}
      </div>
    </>
  );
};
