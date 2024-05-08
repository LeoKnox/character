import { dungeonData } from "./roomData.js";

export default Adventure = () => {
  return (
    <>
      <h3>Adventure Home</h3>
      <div>
        {dungeonData.length.map((x) => (
          <tr>
            {dungeonData.length.map((y) => (
              <td>x</td>
            ))}
          </tr>
        ))}
      </div>
    </>
  );
};
