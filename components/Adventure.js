import { dungeonData } from "./roomData.js";

export default Adventure = () => {
  return (
    <>
      <h3>Adventure Home</h3>
      <div>
        <table>
          {[...Array(dungeonData["width"])].map(() => {
            return (
              <tr>
                +
                {[...Array(dungeonData["length"])].map(() => (
                  <td>*</td>
                ))}
                +
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};
import { dungeonData } from "./roomData.js";

export default Adventure = () => {
  return (
    <>
      <h3>Adventure Home</h3>
      <div>
        <table>
        <tr>
                o
                {[...Array(dungeonData["length"])].map(() => (
                  <td>o</td>
                ))}
                o
              </tr>
          {[...Array(dungeonData["width"])].map(() => {
            return (
                
              <tr>
                o
                {[...Array(dungeonData["length"])].map(() => (
                  <td>+</td>
                ))}
                o
              </tr>
            );
          })}
          <tr>
                o
                {[...Array(dungeonData["length"])].map(() => (
                  <td>o</td>
                ))}
                o
              </tr>
        </table>
      </div>
    </>
  );
};
