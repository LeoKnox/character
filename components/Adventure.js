import { dungeonData } from "./roomData.js";

export default Adventure = () => {
    const drawRow = () => {
     return "!!!!"
     }
  return (
    <>
      <h3>Adventure Home</h3>
      <div>
        <table>
        {() => drawRow()}
          <tr>
            #
            {[...Array(dungeonData["length"])].map(() => (
              <td>#</td>
            ))}
            #
          </tr>
          {[...Array(dungeonData["width"])].map(() => {
            return (
              <tr>
                #
                {[...Array(dungeonData["length"])].map(() => (
                  <td>+</td>
                ))}
                #
              </tr>
            );
          })}
          <tr>
            #
            {[...Array(dungeonData["length"])].map(() => (
              <td>#</td>
            ))}
            #
          </tr>
        </table>
      </div>
    </>
  );
};
