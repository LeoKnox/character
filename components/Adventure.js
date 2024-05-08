import { dungeonData } from "./roomData.js";

export default Adventure = () => {
  return (
    <>
      <h3>Adventure Home</h3>
      <div>
        {[...Array(dungeonData["width"])].map((e, i) => {
          return (
            <tr key={i}>
              {[...Array(dungeonData["length"])].map((e, j) => <td>*</td>)}
            </tr>
          );
        })}
      </div>
    </>
  );
};
